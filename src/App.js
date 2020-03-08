import React from 'react';
import './App.css';
import CountrySelector from './components/CountrySelector';
import CountryTable from './components/CountryTable';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      amount: 0,
      isFetching: false,
    };

    this.onSelect = this.onSelect.bind(this);
    this.onAmountInput = this.onAmountInput.bind(this);
    this.onError = this.onError.bind(this);
  }

  onSelect(value) {
    const selected = [...this.state.selected];
    selected.push(value);

    this.setState({ selected });
  }

  onError(error) {
    this.setState({ error });
  }

  onAmountInput(event) {
    this.setState({ amount: event.target.value });
  }

  render() {
    return (
      <div className="container-flex">
        <div className="row" style={{
          display: this.state.error ? 'block' : 'none',
        }}>
          <div className="alert alert-danger" role="alert">
            {this.state.error}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Enter Amount:</span>
              </div>
              <input
                type="number"
                min="0"
                max="1000000000"
                onInput={this.onAmountInput}
                defaultValue={this.state.amount}
                style={{
                  textAlign: 'right',
                }}
              />
              <div className="input-group-append">
                <span className="input-group-text">SEK</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <CountrySelector onSelect={this.onSelect} items={this.state.countries} onError={this.onError}/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CountryTable
              headers={['a', 'b', 'c']}
              countries={this.state.selected}
              amount={this.state.amount}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
