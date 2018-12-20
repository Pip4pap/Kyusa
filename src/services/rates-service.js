import idb from "@/assets/js/idb"

function openIDB(){
	if(!'serviceWorker' in navigator){
	  return Promise.resolve();
	} else {
		return idb.open('currencyDB', 1, upgradeDB => {
	      const currrencies = upgradeDB.createObjectStore('currencies')
		})
	}
}

function getCurrencies() {
	let returnPromise = openIDB().then(db => {
	  	const currencyStore = db.transaction(['currencies']).objectStore('currencies')
	  	return currencyStore.get('currencies').then(data => {
	  		console.log('From the IDB', data)
	  		if(data === undefined){
			    return fetch('https://free.currencyconverterapi.com/api/v5/currencies')
				        .then(response => {
				          return response.json();
				        })
				        .then(data => {
				        	let currencies = data.results	
							openIDB().then(db => {
								let tx = db.transaction('currencies', 'readwrite');
							    let store = tx.objectStore('currencies');
							    store.put(currencies, 'currencies')
							})
				    		console.log('From the network:',currencies)
				    		return currencies
				        })
	  		}
	  		return data
	  	})
	})
    console.log('returnPromise', returnPromise)
    return returnPromise
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