<template>
	<form>
	  <div>
	    <div>

	      <div>
	        	<input value="0" min="0" id="inputAmount" class="form-control" type="number" name="amount" placeholder="Enter amount">
	      </div>
	      
	      <div>
	          <select id="fromCurrency" onchange="" class="form-control">
	            <option v-for="currency in currencies">{{ currency.id }} {{ currency.currencyName }}</option>
	          </select>
	      </div>

	      <div>
	          <select id="toCurrency" onchange="" class="form-control">
	          	<option v-for="currency in currencies">{{ currency.id }} {{ currency.currencyName }}</option>
	          </select>
	      </div>  
	    
	    </div>
	    <div>
	      	<button>Convert</button>
	    </div>
	    <!---->
	  </div>
	</form>
</template>

<script>
export default {
  name: 'inputForm',
  data() {
  	return {
  		currencies: []
  	}
  },
  created() {
    fetch('https://free.currencyconverterapi.com/api/v5/currencies')
    .then(response => {
		return response.json()
  	})
    .then(data => {
    	this.currencies = data.results
    })
  }
}
</script>

<style scoped>
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
</style>