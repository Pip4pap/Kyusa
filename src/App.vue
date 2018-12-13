<template>
  <div id="app">
    <mainHeading/>
    <inputForm/>
    <display/>
  </div>
</template>

<script>
import Hello from './components/Hello'
import inputForm from './components/form'
import display from './components/display'
import mainHeading from './components/heading'

export default {
  name: 'app',
  components: {
    Hello,
    inputForm,
    display,
    mainHeading
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: Helvetica;
  background-color: #ffc107;
}
</style>
