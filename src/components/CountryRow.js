import React from 'react';
import convertSEKToLocalCurrency from '../utils/currency-utils';
import formatNumber from '../utils/number-format-utils';

class CountryRow extends React.Component {
  render() {
    const {
      country: { flag, name, population, currenciesWithRates },
      amount,
    } = this.props;
    return (
      <tr>
        <td>
          <img src={flag} style={{ width: '40px' }} alt={name}/>
        </td>
        <td>{name}</td>
        <td>{formatNumber(population)}</td>
        <td>{currenciesWithRates[0].code}</td>
        <td>{convertSEKToLocalCurrency(amount, currenciesWithRates[0].code, currenciesWithRates[0].rate)}</td>
      </tr>
    );
  }
}

export default CountryRow;
