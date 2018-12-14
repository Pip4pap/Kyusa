<template>
	<p>{{ result }}</p>
</template>

<script>
export default {
  name: 'display',
  props: ['toCurrency', 'fromCurrency'],
  data() {
  	return {
  		result: null
  	}
  },
  watch: {
  	toCurrency: function(_) {
  		runConversion(this.fromCurrency, this.toCurrency).then(result => {
  			this.result = round(result, 0)
  		})
  	},
  	fromCurrency: function(_) {
  		runConversion(this.fromCurrency, this.toCurrency).then(result => {
  			this.result = round(result, 0)
  		})
  	}
  },

}

function runConversion(from, to) {
	console.log('running conversion', from, to)
	return new Promise((resolve, reject) => {
		if (from && to) {
			getRate(from, to).then(rate => {
				resolve(rate * 1000)
			})
		}
	})
}

function round (value, decimals) {
	return Number(Math.round(`${value}e${decimals}`)+`e-${decimals}`)
}

function getRate(from, to) {
	return fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=ultra`)
			.then(resp => {
				return resp.json()
			})
		  	.then(data => {
		  		// this.rate = Object.values(data)[0]
		  		let rate = Object.values(data)[0]
		  		console.log(rate)
		  		return rate
		  	})
}
</script>

<style>
	p{
		font-size: 40px;
		padding-top: 20px;
	}
</style>