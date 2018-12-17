<template>
  <div id="app">
    <mainHeading/>
    <inputForm/>
  </div>
</template>

<script>
import Hello from '@/components/Hello'
import mainHeading from '@/components/heading'
import inputForm from '@/components/form'

export default {
  name: 'app',
  components: {
    Hello,
    inputForm,
    mainHeading
  }
}
</script>

<style>
body {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ffa916;
}
</style>
