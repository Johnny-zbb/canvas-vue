//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory } from 'vue-router'
//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory
//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [{
    path: '/',
    redirect: '/page1'
    // component: () => import('../components/a.vue')
    },
    {
        path: '/page1',
        component: () => import('../components/page1.vue')
    },
    // {
    //     path: '/riskassessment',
    //     component: () => import('../components/RiskAssessment.vue')
    // },
    // {
    //     path: '/datamanager',
    //     component: () => import('../components/DataManager.vue')
    // },
    // {
    //     path: '/timechangemap',
    //     component: () => import('../components/TimeChangeMap.vue')
    // },
    // {
    //     path: '/publicopinion',
    //     component: () => import('../components/PublicOpinion.vue')
    // },
    // {
    //     path: '/transmisssimulation',
    //     component: () => import('../components/TransmissSimulation.vue')
    // },
]
 
 
 
const router = createRouter({
    history: createWebHistory(),
    routes
})
 
//导出router
export default router