import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        name: 'Login',
        hidden: true
    },
    {
        path: '/register',
        component: () =>
            import ('@/views/register/index'),
        name: 'Register',
        hidden: true
    },
    {
        path: '/',
        redirect: '/home/index',
        hidden: true
    },
    {
        path: '/room/:id',
        component: () =>
            import ('@/views/pub/room'),
        name: 'ChatRoom',
        hidden: true
    },
    {
        path: '/home',
        component: layout,
        redirect: '/home/index',

        children: [{
            path: 'index',
            component: () =>
                import ('@/views/home/index'),
            name: 'Home',
            meta: { title: '首页', icon: 'home' }
        }]
    },
    {
        path: '/animation',
        component: layout,
        redirect: '/animation/index',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/animation/index'),
            name: 'Home',
            meta: { title: '动画', icon: 'animation' }
        }]
    }
]
export const asyncRoutes = [{
        path: '/otomads',
        component: layout,
        redirect: '/otomads/index',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/otomads/index'),
            name: 'Otomads',
            meta: { title: '鬼畜', icon: 'otomads' }
        }]
    },
    {
        path: '/chat',
        component: layout,
        redirect: '/chat/index',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/chat/index'),
            name: 'Chat',
            meta: { title: '聊天室', icon: 'chat' }
        }]
    }
]

const createRouter = () =>
    new Router({
        mode: 'history', // require service support
        scrollBehavior: () => ({ y: 0 }), //组件滚动行为
        routes: constantRoutes
    })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router