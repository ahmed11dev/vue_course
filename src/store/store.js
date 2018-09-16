import Vue from "vue"
import Vuex from "vuex"
import  likeModule from "./likeModule"

Vue.use(Vuex); //استخدام فيو اكس كا بلاجن

const store = new Vuex.Store({
    state:{
        counter:0
    },
    getters:{
        total(state){
           return state.counter;
       },
        counter(state) {
             
            return state.counter;
        },
        dubCounter(state){
            
            return state.counter * 2;
        },
        multiCounter:(state)=> (multi)=> {
            return state.counter * multi;
        }
    },
    mutations:{
        increase(state){
            state.counter++;
        },
        decrease(state) {
            state.counter--;
        },
        n_increase(state,n) {
            state.counter+= n;
        }
    },
    actions:{
            increseAfter({commit}){
                setTimeout(function(){
                    commit('increase');
                },1000);
            }
    },
    modules:{
        likeModule: likeModule
    }
});
export default store;