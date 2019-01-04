<template>
	<div>		  
	    <input v-model="inputAmount" value="0" min="0" id="inputAmount" class="form-control" type="number" name="inputAmount" placeholder="Enter amount"><br/>
	      
	    <select id="fromCurrency" v-model="fromCurrency" class="ui search selection dropdown">
	        <option :value="currency.id" v-for="currency in currencies">
 		        	{{ currency.id }} {{ currency.currencyName }}		    	
			</option>
	    </select><br/>
	      
	    <select id="toCurrency" v-model="toCurrency" class="ui search selection dropdown">
  			<option :value="currency.id" v-for="currency in currencies">
		          	{{ currency.id }} {{ currency.currencyName }}
	        </option>
	    </select><br/>
		<button v-bind:class="{disabled: !(toCurrency && fromCurrency)}" @click="convert">Convert</button>
		<p id="display">{{toCurrency}} {{result}}</p>
		<div id="popup">
			<span><strong>You're offline!</strong> <i>Only</i> conversions you made while online will be available offline</span>
		</div>
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
		inputAmount: null
	}
  },
  created(){
  	getCurrencies().then(currencies => this.currencies = currencies)
  },
  mounted(){
  	$('#fromCurrency').dropdown()
  	$('#toCurrency').dropdown()
  },
  methods: {
  	convert() {
  		if(navigator.onLine === false){
			$('#popup').css({
							'visibility':'visible', 
							'opacity':'1',
							'animation-name': 'slideUp',
							'animation-duration': '2s'
							})  			
  		}
  		getRate(this.fromCurrency, this.toCurrency).then(rate => {
  			let result = +(rate * this.inputAmount).toFixed(0)
  			this.result = result.toLocaleString()
  		})
  	},
  	closePopup(){
  		$('.close').click(() => {
  			$('.overlay').css({'visibility':'hidden', 'opacity':'0'})
  		})
  	}
  }
}
</script>

<style>
	button.disabled {
		background-color: #3a3a3a;
	}
	.form-control, .ui.selection.dropdown{
		border-top-color: transparent;
		border-right-color: transparent;
		border-left-color: transparent;
		background-color: inherit !important;
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
	#display{
		font-size: 40px;
		margin-top: 30px;
	}
	@keyframes slideUp{
		from {
			visibility: hidden;
			opacity: 0;
		}
		to {
			visibility: visible;
			opacity: 1;	
		}
	}
	#popup{
		position: absolute;
		bottom: 0;
		background-color: black;
		width: 100%;
		height: 50px;
		color: white;
		font-size: 1rem;
		visibility: hidden;
		opacity: 0;
	}
	span{
		height: 50px;
		line-height: 50px;
	}
	strong{
		color: red;
	}
</style>