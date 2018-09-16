<template>
<h1>about us page </h1>
</template>
<script>
export default {
   beforeRouteLeave(to,from,next){
       console.log("from component before");
       next();
   }
}
</script>