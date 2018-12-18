<template>
  <p> {{ title }}</p>
</template>

<script>
export default {
  name: 'mainHeading',
  data: () => {
    let title = 'Currency Converter'
    return {title}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  p{
    font-size: 40px;
    font-weight: normal;
  }
  
</style>
