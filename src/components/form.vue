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
		<p>{{toCurrency}} {{result}}</p>
		<div id="popup" class="overlay">
			<div class="popup">
				<h2>You're offline</h2>
				<span class="close" @click="closePopup">&times;</span>
				<div class="content">
					<strong>Only</strong> the conversions you made while online are available
				</div>
			</div>
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
  			$('button').click(() => {
  				$('.overlay').css({'visibility':'visible', 'opacity':'1'})
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
	p{
		font-size: 40px;
		margin-top: 30px;
	}
	.overlay {
	  position: fixed;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  background: rgba(0, 0, 0, 0.7);
	  transition: opacity 500ms;
	  visibility: hidden;
	  opacity: 0;
	}
	.popup {
	  margin: 70px auto;
	  padding: 20px;
	  background: #fff;
	  border-radius: 5px;
	  width: 30%;
	  position: relative;
	  transition: all 5s ease-in-out;
	}

	.popup h2 {
	  margin-top: 0;
	  color: #333;
	  font-family: Tahoma, Arial, sans-serif;
	}
	.popup .close {
	  position: absolute;
	  top: 20px;
	  right: 30px;
	  transition: all 200ms;
	  font-size: 30px;
	  font-weight: bold;
	  text-decoration: none;
	  color: #333;
	}
	.popup .close:hover {
	  color: #06D85F;
	  cursor: pointer;
	}
	.popup .content {
	  max-height: 30%;
	  overflow: auto;
	}

	@media screen and (max-width: 700px){
	  .box{
	    width: 70%;
	  }
	  .popup{
	    width: 70%;
	  }
	}
</style>