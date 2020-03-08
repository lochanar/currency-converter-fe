const DEFAULT_LOCALE = 'sv-SE';

const formatNumber = (number) => {
  const userLocale = window.navigator.language || DEFAULT_LOCALE;
  return new Intl.NumberFormat(userLocale).format(number)
};

export default formatNumber;