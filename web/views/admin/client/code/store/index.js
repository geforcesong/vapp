import Vue from 'vue';
import Vuex from 'vuex';
import categories from './categories';
Vue.use(Vuex);

export function createStore() {
    return new Vuex.Store({
        modules: {
            categories
        }
    });
}
