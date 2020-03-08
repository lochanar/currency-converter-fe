const MAX_FRACTION_DIGITS = 2;
/**
 * Converts an amount in SEK to a corresponding amount of a given local currency
 * @param {number} amountInSEK the amount in SEK to be converted to local currency
 * @param {string} currencyFormat the currency format of the local currency (eg: USD, LKR )
 * @param {Object} exchangeRate the exchange rate between SEK and local currency
 */
const convertSEKToLocalCurrency = ( amountInSEK, currencyFormat, exchangeRate) => {
  const convertedAmount = exchangeRate * amountInSEK;
    return currencyFormatter(convertedAmount, currencyFormat);
};

/**
 * Formats an amount in a given currency format (eg: LKR 19.37)
 * @param {number} amount the amount to be formatted
 * @param {string} currencyFormat the currency format 
 * @param {number} maximumFractionDigits the maximum number of decimal points   
 */
const currencyFormatter = (amount, currencyFormat, maximumFractionDigits = MAX_FRACTION_DIGITS)  => {
  return new Intl.NumberFormat(currencyFormat, {
      style: 'currency',
      currency: currencyFormat,
      maximumFractionDigits: maximumFractionDigits,
    }).format(amount);
};

export default convertSEKToLocalCurrency;