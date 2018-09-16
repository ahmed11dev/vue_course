<template>
    <div>
        <h2>Counter</h2>
       

        <button v-if="liked" @click="likess">like</button>
        <button v-if="! liked"@click="likess">unlike</button>
        <h4> {{likes}} likes</h4>
    </div>
</template>

<script>
import {mapGetters, mapActions } from "vuex";
export default {
    computed:{
            ... mapGetters('likeModule',['likes','liked'])
            // getLikes(){
            //     return this.$store.getters['likeModule/likes'];
            // }
    },
    methods:{
        likess(){
            this.$store.dispatch('likeModule/toggleLikes');
        }
    }
}
</script>
