<template>
	<div>
		<form>
		  <div>
		    <div>

		      <div>
		        	<input value="0" min="0" id="inputAmount" class="form-control" type="number" name="amount" placeholder="Enter amount">
		      </div>
		      
		      <div>
		          <select id="fromCurrency" v-model="fromCurrency" class="form-control">
		            <option v-bind:value="currency.id" v-for="currency in currencies" :key="currency.id">
		            	{{ currency.id }} {{ currency.currencyName }}
		        	</option>
		          </select>
		      </div>

		      <div>
		          <select id="toCurrency" v-model="toCurrency" class="form-control">
	  				<option v-bind:value="currency.id" v-for="currency in currencies" :key="currency.id">
		          		{{ currency.id }} {{ currency.currencyName }}
		          	</option>
		          </select>
		      </div>  
		    </div>
		    <!---->
		  </div>
		</form>
		<div>
		  	<button v-bind:class="{disabled: !(toCurrency && fromCurrency)}">Convert</button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'inputForm',
  props: ['currencies'],
  data() {
	return {
		fromCurrency: null,
		toCurrency: null,
	}
  },
  watch: {
  	toCurrency: function(newVal) {
  		this.$emit('update:toCurrency', newVal)
  	},
  	fromCurrency: function(newVal){
  		this.$emit('update:fromCurrency', newVal)
  	}
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
</style>