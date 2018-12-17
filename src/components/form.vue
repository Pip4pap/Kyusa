<template>
	<div>
		<form>
		  
		    <input value="0" min="0" id="inputAmount" class="form-control" type="number" name="inputAmount" placeholder="Enter amount"><br/>
		      
		    <select id="fromCurrency" v-model="fromCurrency" class="form-control">
		        <option :value="currency.id" v-for="currency in currencies">
		        	{{ currency.id }} {{ currency.currencyName }}
		    	</option>
		    </select><br/>
		      
		    <select id="toCurrency" v-model="toCurrency" class="form-control">
	  			<option :value="currency.id" v-for="currency in currencies">
		          	{{ currency.id }} {{ currency.currencyName }}
		        </option>
		    </select><br/>
		</form>
		<button v-bind:class="{disabled: !(toCurrency && fromCurrency)}" @click="convert">Convert</button>
		<p>{{toCurrency}} {{result}}</p>
	</div>
</template>

<script>
import {getRate, getCurrencies} from "@/services/rates-service"

export default {
  name: 'inputForm',
  data() {
	return {
		currencies: [],
		fromCurrency: null,
		toCurrency: null,
		result: null,
	}
  },
  created(){
  	getCurrencies().then(currencies => this.currencies = currencies)
  },
  methods: {
  	convert() {
  		getRate(this.fromCurrency, this.toCurrency).then(rate => {
  			this.result = (rate * 800).toFixed(0)
  			console.log(`${this.toCurrency} ${this.result}`)
  		})
  		console.log(this.fromCurrency, this.toCurrency)
  	},

  }
}
</script>

<style scoped>
	button.disabled {
		background-color: #3a3a3a;
	}
	.form-control, option{
		border-top-color: transparent;
		border-right-color: transparent;
		border-left-color: transparent;
		background-color: inherit;
		border-bottom-color: black;
		width: 300px;
		margin-bottom: 40px;
		font-size: 24px;
	}
	.form-control:focus, button:focus{
		outline-color: transparent;
	}
	button{
		background-color: black;
		color: #ffc107;
		border-color: transparent;
		padding: .5rem 1rem;
		font-size: 1.25rem;
		line-height: 1.5;
		border-radius: .3rem;
	}
	p{
		font-size: 40px;
		margin-top: 20px;
	}
</style>