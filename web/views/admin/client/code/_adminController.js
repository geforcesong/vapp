import Vue from 'vue';

class AdminController {
    constructor() {
        this.app = this._createdApp();
    }

    _createdApp() {
        const app = new Vue({
            data: {
                message: 'hello vue'
            }
        });
        app.$mount('#application');
        return app;
    }
}

new AdminController();
