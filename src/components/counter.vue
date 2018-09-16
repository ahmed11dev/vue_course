<template>
    <div>
        <h2>Counter</h2>
        Counter: {{counter}} <br />
        duble Counter: {{dCounter}}
        multi Counter: {{mCounter}}

        <button @click="increase">Increase</button>
        <button @click="add_num">+5 to counter</button>
        <button @click="decrease">Decrease</button>
        <button @click="increaseAfter1">add after 1 sec</button>
    </div>
</template>

<script>
import {mapMutations} from "vuex";
export default {
    computed:{
        counter(){
            return this.$store.state.counter;
        },
        dCounter(){
            return this.$store.getters.dubCounter;
        },
        mCounter(){
            return this.$store.getters.multiCounter(3);
        }
    },
    methods: {
        ... mapMutations(["increase","decrease"]),
        
        add_num (){
             this.$store.commit("n_increase",5);
        },
        increaseAfter1(){
            this.$store.dispatch('increseAfter');
        }
    }
}
</script>