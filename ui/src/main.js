import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

function isLoggedIn() {
    return store.getters['auth/authenticated']
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isLoggedIn()) {
            next({
                name: 'Login',
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (isLoggedIn()) {
            next({
                name: 'Dashboard',
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

store.dispatch('auth/me').then(() => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})