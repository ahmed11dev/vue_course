<template>

<div>
    <h2>users vue</h2>
      
    <h4>user number {{id}} </h4>
    <h5>{{$route.query.lol}}</h5>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
    props:["id"]
    
   
}
</script>
