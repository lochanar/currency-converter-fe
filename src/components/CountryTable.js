import React from 'react';
import CountryRow from './CountryRow';

class CountryTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: props.headers,
    };
  }

  createHeader() {
    let header = [];

    ['Flag', 'Country Name', 'Population', 'Currency', 'Converted Amount'].forEach((head) => {
      header.push(<th key={head}> {head}</th>);
    });

    return header;
  }

  renderCountries() {
    let countries = [];
    let row = 0;

    this.props.countries.forEach((country) => {
      countries.push(
        <CountryRow
          country={country}
          amount={this.props.amount}
          exchangeRates={this.props.exchangeRates}
          key={row++}
        />,
      );
    });

    return countries;
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
        <tr>{this.createHeader()}</tr>
        </thead>
        <tbody>{this.renderCountries()}</tbody>
      </table>
    );
  }
}

export default CountryTable;
