import Vue from 'vue';
import Router from 'vue-router';
import todo from '../features/todos/index.vue';
import category from '../features/categories/index.vue';
import product from '../features/products/index.vue';
import productCreate from '../features/products/createProduct.vue';

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {path: '/admin/todos', component: todo},
            {path: '/admin/categories', component: category},
            {path: '/admin/products', component: product},
            {path: '/admin/products/create', component: productCreate},
            {path: '*', redirect: '/admin/products'}
        ]
    });
}
