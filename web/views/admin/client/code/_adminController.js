import Vue from 'vue';
import {createRouter} from './router';
import {createStore} from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import application from './application.vue';
class AdminController {
    constructor() {
        this.app = this._createdApp();
    }

    _createdApp() {
        const router = createRouter();
        const store = createStore();
        Vue.use(ElementUI);
        const app = new Vue({
            router,
            store,
            render: h => h(application)
        });
        document.head.removeChild(document.querySelector('#splash-spinner'));
        document.body.removeChild(document.querySelector('.spinner'));
        app.$mount('#application');
        return app;
    }
}

new AdminController();
