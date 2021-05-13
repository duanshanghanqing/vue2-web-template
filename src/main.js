import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mixins from './mixins'

Vue.config.productionTip = false

Vue.mixin(mixins)

new Vue({
    el: '#root',
    mixins,
    router,
    store,
    render: h => h(App)
})
