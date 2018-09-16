<template>
  <div id="app">

<navBar />    


<counter></counter>
   <router-view></router-view>
   <like></like>
  </div>
  
</template>

<script>
import navBar from "./components/navBar"
import counter from "./components/counter";
import like from "./components/like";

export default {
  
  components: {
   navBar,
   like,
    counter,
  }
}
</script>

<style>

</style>
