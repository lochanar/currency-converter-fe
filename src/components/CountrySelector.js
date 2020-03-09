import React from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { getCountriesByName } from '../services/countryService';

const GENERIC_ERROR_MESSAGE = 'Oops! Something went wrong...';

class CountrySelector extends React.Component {
  timeout = null;

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      countries: [],
      isFetching: false,
    };
  }

  render() {
    return (
      <ReactAutocomplete
        items={this.state.countries}
        shouldItemRender={(item) => item}
        getItemValue={(item) => item.name}
        renderItem={(item, highlighted) => (
          <div key={item.alpha3Code} style={{ backgroundColor: highlighted ? 'lightgrey' : 'white' }}>
            {item.name}
          </div>
        )}
        renderInput={(props) => {
          return (
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Add Country:</span>
              </div>
              <input disabled={this.state.isFetching} {...props} />
              <div
                className="input-group-append"
                style={{
                  display: this.state.isFetching ? 'block' : 'none',
                }}
              >
                <div className="input-group-text">
                  <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
        value={this.state.value}
        onChange={(e) => {
          this.setState({ value: e.target.value });
          this.fetchCountries(e.target.value);
        }}
        onSelect={(value) => {
          const country = this.state.countries.find((item) => item.name.indexOf(value) === 0);
          this.props.onSelect(country);
        }}
        menuStyle={{
          borderRadius: '3px',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '2px 0',
          fontSize: '90%',
          position: 'fixed',
          overflow: 'auto',
          maxHeight: '50%',
          width: '100px',
          zIndex: '10',
        }}
      />
    );
  }

  fetchCountries(search) {
    clearTimeout(this.timeout);
    if (search) {
      this.timeout = setTimeout(() => {
        this.setState({ isFetching: true });
        getCountriesByName(search).then(
          (countries) => {
            if (Array.isArray(countries)) {
              this.setState({ isFetching: false, countries });
            } else {
              this.setState({ isFetching: false, countries: [] });
            }
            this.props.onError();
          },
          (error) => {
            if (error && error.status === 404) {
              this.setState({ isFetching: false, countries: [] });
            } else if (error && error.status === 429) {
              this.props.onError(error.message);
              this.setState({ isFetching: false, countries: [] });
            } else {
              this.props.onError(GENERIC_ERROR_MESSAGE);
              this.setState({ isFetching: false });
            }
          },
        );
      }, 1000);
    } else {
      this.setState({ countries: [] });
    }
  }
}

export default CountrySelector;