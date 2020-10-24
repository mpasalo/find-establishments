import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
    state: {
        selectedPlace: "",
    },
    mutations: {
        changePlace(state, payload) {
            state.selectedPlace = payload;
        },
    },
});

new Vue({
    render: (h) => h(App),
    store: store,
}).$mount("#app");
