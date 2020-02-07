import currencyFormatter from 'currency-formatter';

export const formatPrice = (value, decimals) => {
    console.log(value,decimals)
    let price = currencyFormatter.format(value, {
        symbol: '$',
        decimal: ',',
        thousand: '.',
        precision: decimals,
        format: '%s %v' // %s is the symbol and %v is the value
      });

      return price;

}
