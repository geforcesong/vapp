import Vue from 'vue';
import Vuex from 'vuex';
import categories from './categories';
import products from './products';
Vue.use(Vuex);

export function createStore() {
    return new Vuex.Store({
        modules: {
            categories,
            products
        }
    });
}
