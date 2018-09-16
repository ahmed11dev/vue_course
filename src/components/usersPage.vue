<template>

<div class="container">
    <h2>users page</h2>
      
    <h4>post number </h4>
    <ul>
        <li><router-link to="/users/1?lol=4">user 1</router-link></li>
        <li><router-link :to="{name:'single-user',params:{id:2},query:{lol:5} }">شراء منتجات</router-link></li>
    </ul>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
    props:["id"]
    
    // طريقة الوصول الي ال اي دي
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }
}
</script>
