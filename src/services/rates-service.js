import idb from "@/assets/js/idb"

function openIDB(){
	if(!'serviceWorker' in navigator){
	  return Promise.resolve();
	} else {
		return idb.open('currencyDB', 1, upgradeDB => {
			switch(upgradeDB.oldVersion){
				case 0:
					const currrencies = upgradeDB.createObjectStore('currencies')
				case 1:
					const rates = upgradeDB.createObjectStore('rates')				
			}
		})
	}
}

function getCurrencies() {
	return openIDB().then(db => {
	  	const currencyStore = db.transaction(['currencies']).objectStore('currencies')
	  	return currencyStore.get('currencies').then(data => {
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
				    		return currencies
				        })
	  		}
	  		return data
	  	})
	})
}

function getRate(fromCurrency, toCurrency){
	// return openIDB().then(db => {
	// 	const ratesStore = db.transaction(['rates']).objectStore('rates')
	// 	return ratesStore.get(`${fromCurrency}_${toCurrency}`).then(data => {
	// 		if (data === undefined){
		return fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${fromCurrency}_${toCurrency}`)
				.then(response => {
					return response.json()
				})
				.then(data => {
					console.log('rate Object: ', data.results.fromCurrency_toCurrency.val)
					return 
				})
	// 		}
	// 	})
	// })
}

export {getCurrencies, getRate}