<template>

	<div>
		
		<inputForm v-bind:currencies="currencies" v-on:update:fromCurrency="fromCurrencyChanged" v-on:update:toCurrency="toCurrencyChanged"/>
		<display v-bind:toCurrency="toCurrency" v-bind:fromCurrency="fromCurrency"/>
	</div>

</template>

<script>
import inputForm from '@/components/form'
import display from '@/components/display'

export default {
	name: 'inputDisplay',
	components: {
		inputForm,
		display
	},
	data(){
		return {
			currencies: [],
			toCurrency: null,
			fromCurrency: null
		}
	},
	created(){
	    fetch('https://free.currencyconverterapi.com/api/v5/currencies')
	    .then(response => {
			return response.json()
	  	})
	    .then(data => {
	    	this.currencies = data.results
	    })
	},
	methods: {
		toCurrencyChanged: function(val) {
			this.toCurrency = val
			console.log('parent toCurrencyChanged to:', val)
		},
		fromCurrencyChanged: function(val){
			this.fromCurrency = val
			console.log('parent fromCurrencyChanged to:', val)
		}
	}
}
</script>