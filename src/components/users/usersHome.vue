<template>
    <div>
        <h3>users home page</h3>
        <button @click="goToHome">go to dash borad</button>
    </div>
</template>
<script>
export default {
    methods:{
        goToHome:function(){
            this.$router.push("/");
        }
    }
}
</script>

