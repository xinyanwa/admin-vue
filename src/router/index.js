import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../page/login'
import Major from '../page/major';
import Index from "@/components/main/Index";
import User from "@/components/user/User";
import Error from "@/components/error/Error";
import Info from "@/components/info/Info";
import Department from "@/components/department/Department";
import System from "@/components/system/System";

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
            /*{
                path: 'shopInfo',
                name: 'ShopInfo',
                component: ShopInfo
            },
            {
                path: 'userPicture',
                name: 'UserPicture',
                component: UserPicture
            },
            {
                path: 'shopPicture',
                name: 'ShopPicture',
                component: ShopPicture
            },*/
            {
                path: 'index',
                name: 'Index',
                component: Index
            },
            {
              path: 'info',
              name: 'Info',
              component: Info,
              children:[
                  {
                      path: 'user',
                      name: 'user',
                      component: User
                  },
              ]
            },
            {
                path: 'department',
                name: 'department',
                component: Department
            },
            {
                path: 'system',
                name: 'System',
                component: System
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
