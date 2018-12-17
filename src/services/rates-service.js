function getCurrencies() {
	return fetch('https://free.currencyconverterapi.com/api/v5/currencies')
  			.then(response => {
  				return response.json()
  			})
  			.then(data => {
  				return data.results	
  			})
}

function getRate(fromCurrency, toCurrency){
	return fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${fromCurrency}_${toCurrency}&compact=ultra`)
	.then(response => {
		return response.json()
	})
	.then(data => {
		return Object.values(data)[0]
	})
}

export {getCurrencies, getRate}