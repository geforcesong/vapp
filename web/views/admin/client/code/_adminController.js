import Vue from 'vue';
import {createRouter} from './router';
import application from './application.vue';
class AdminController {
    constructor() {
        this.app = this._createdApp();
    }

    _createdApp() {
        const router = createRouter();
        const app = new Vue({
            router,
            render: h => h(application)
        });
        document.head.removeChild(document.querySelector('#splash-spinner'));
        document.body.removeChild(document.querySelector('.spinner'));
        app.$mount('#todoapp');
        return app;
    }
}

new AdminController();
