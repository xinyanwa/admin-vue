import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../page/login'
import Major from '../page/major';
import Info from "@/components/info/Info";
import Index from "@/components/main/Index";
import User from "@/components/user/User";
import Error from "@/components/error/Error";

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        name: 'Error',
        component: Error
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/main',
        name: 'Major',
        component: Major,
        redirect: '/main/index',
        children: [
            {
                path: 'info',
                name: 'Info',
                component: Info
            },
            {
                path: 'index',
                name: 'Index',
                component: Index
            },
            {
                path: 'user',
                name: 'User',
                component: User
            }
        ],
    }
]

const whiteList = ['/login']

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (whiteList.indexOf(to.path) < 0) {
        /*if (sessionStorage.getItem('userName')) {
            next()
        } else {
            if (to.path === '/login') {
                next()
            } else {
                next('/login')
            }
        }*/
        next()
    } else {
        next()
    }
})


export default router
