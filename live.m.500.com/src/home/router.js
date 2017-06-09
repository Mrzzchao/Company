/**
 * Created by lichun on 2017/1/19.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import football from './components/football.vue';
import basketball from './components/basketball.vue';

const router = new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/football', component: football },
        { path: '/football/:tab/:playType', component: football },
        { path: '/football/:tab/', component: football },
        { path: '/basketball', component: basketball },
        { path: '/basketball/:tab/:playType', component: basketball },
        { path: '/basketball/:tab/', component: basketball },
        { path: '*', component: football }
    ]
});

/* router.beforeEach((to, from, next) => {
    let code = null, base=null;
    if(~to.path.indexOf('code__')){
        base = to.path.split('code__')[0];
        code = to.path.split('code__')[1].split('/')[0];
    }
    if(code){
        store.dispatch('doLogin', code).then(()=>{
            router.replace(base);
            next();
        }, (err)=>{
            store.dispatch('doAuth', base)
        })

    }else {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (store.state.ck) {
                next();
            } else {
                if(~to.path.indexOf('__ck__')){
                    store.state.ck = to.path.split('__ck__')[1];
                    router.replace(to.path.split('__ck__')[0]);
                    // next();

                }else {
                    store.dispatch('doAuth', base||to.path);
                }

            }

        } else {
            next(); // 确保一定要调用 next()
        }
    }

}); */

export default router;