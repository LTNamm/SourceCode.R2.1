<template>
  <div id="app">
    <Nagivation id="Navbar"/>
    <CardBody/>
  </div>
</template>

<script>
import Nagivation from './components/Navigation.vue'
import CardBody from './components/CardBody.vue'


export default {
  name: 'App',
  components: {
    Nagivation,
    CardBody
  }
}
</script>

<style>
#Navbar{
  background: white;
  box-shadow: 0px 1px rgb(230, 230, 230);
  height: 80px;
  width: 100%;
  display: inline-block;
}

#app{
  font-family: sans-serif;
}
</style>
