import Vue from 'vue';
import Router from 'vue-router';
import ccc from '../features/todos/index.vue';

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/admin/todos',
                component: ccc
            },
            {path: '*', redirect: '/admin/todos'}
        ]
    });
}
