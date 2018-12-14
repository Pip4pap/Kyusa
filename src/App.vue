<template>
  <div id="app">
    <mainHeading/>
    <inputDisplay/>
  </div>
</template>

<script>
import Hello from '@/components/Hello'
import mainHeading from '@/components/heading'
import inputDisplay from '@/components/formDisplay'

export default {
  name: 'app',
  components: {
    Hello,
    inputDisplay,
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
  background-color: #ffc107;
}
</style>
