import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Company from '../views/homes/companyView.vue'
import ComPus from '../views/homes/campusView.vue'
import JobView from '../views/homes/JobView.vue'
import TabView from '../views/homes/TabView.vue'
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path:'comPus/:id/:title',
        component:ComPus
      },
      {
        name:'myComPany',
        path:'company',
        component:Company,
        // props: {
        //   id:1,
        //   title: '路由中带参数'
        // },
        props: true
      },
      {
        path:'jobView',
        component:JobView
      },
      {
        path:'',
        component:TabView
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
