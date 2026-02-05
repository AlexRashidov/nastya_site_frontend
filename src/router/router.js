import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        name: 'home',
        path: '/main',
        component: () => import('@/components/main_section.vue'),
    },
    {
        name: 'service',
        path: '/service',
        component: () => import('@/components/service.vue'),
    },
    {
        name: 'about',
        path: '/about',
        component: () => import('@/components/about_section.vue')
    },
    {
        name: 'my_exp',
        path: '/my_exp',
        component: () => import('@/components/Gerald_and_Anastasia.vue')
    },
    {
        name: 'education',
        path: '/education',
        component: () => import('@/components/education.vue'),
    },
    {
        name: 'methodology',
        path: '/methodology',
        component: () => import('@/components/methodology_section.vue')
    },
    {
        name: 'FAQ',
        path: '/faq',
        component: () => import('@/components/FAQ.vue'),
    },
    {
      name: 'feedback',
      path: '/feedback',
      component: () => import('@/components/feedback.vue'),
    },
    {
        name: 'contacts',
        path: '/contacts',
        component: () => import('@/components/contacts.vue'),
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0, behavior: 'smooth' }
    }
})
export default router
