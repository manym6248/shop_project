import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Madia from '../views/Madia.vue'
import Blog from '../views/Blog.vue'
import ProductPage from '../views/ProductPage.vue'
import Main from '../Main.vue'



// admin panel

//import Admin from '../views/admin/Admin.vue'
import Admin from '../views/admin/views/dashboard/Admin.vue'
import Dashboard from '../views/admin/views/dashboard/Dashboard.vue'
import UserProfile from '../views/admin/views/dashboard/pages/UserProfile.vue'
import AddProduct from '../views/admin/views/dashboard/products/AddProduct.vue'
import EditProduct from '../views/admin/views/dashboard/products/EditProduct.vue'
import Categorized from '../views/admin/views/dashboard/products/Categorized.vue'
import Subcategory from '../views/admin/views/dashboard/products/Subcategory.vue'

import Notifications from '../views/admin/views/dashboard/component/Notifications.vue'
import Icons from '../views/admin/views/dashboard/component/Icons.vue'
import Typography from '../views/admin/views/dashboard/component/Typography.vue'
import RegularTables from '../views/admin/views/dashboard/tables/RegularTables.vue'
import GoogleMaps from '../views/admin/views/dashboard/maps/GoogleMaps.vue'
import Upgrade from '../views/admin/views/dashboard/Upgrade.vue'


//login
 import Login from '../views/login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'productpage',
        name: 'ProductPage',
        component:ProductPage,
      },
      {
        path: 'blog',
        name: 'Blog',
        component:Blog,
      },
      {
        path: 'madia',
        name: 'Madia',
        component:Madia,
      },
      {
        path: 'about',
        name: 'About',
        component:About,
      },
    ]
  },

  {
    path: '/login',
    name: 'Login',
    component:Login,
      
  },
 

{
  path: '/admin',
  name: 'Admin',
  component:Admin,
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component:Dashboard,
        },
        // Pages
        {
          name: 'User Profile',
          path: '/pages/user',
          component: UserProfile,
        },
        {
          name: 'Product',
          path: '/products/addProduct',
          component: AddProduct,
        },
        {
          name: 'EditProduct',
          path: '/products/editProduct',
          component: EditProduct,
        },
        {
          name: 'Categorized',
          path: '/products/categorized',
          component: Categorized,
        },
        {
          name: 'Subcategory',
          path: '/products/subcategory',
          component: Subcategory,
        },
        {
          name: 'Notifications',
          path: '/components/notifications',
          component: Notifications,
        },
        {
          name: 'Icons',
          path: '/components/icons',
          component:Icons,
        },
        {
          name: 'Typography',
          path: '/components/typography',
          component:Typography,
        },
        // Tables
        {
          name: 'Regular Tables',
          path: '/tables/regular-tables',
          component:RegularTables,
        },
        // Maps
        {
          name: 'Google Maps',
          path: '/maps/google-maps',
          component:GoogleMaps,
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: '/upgrade',
          component:Upgrade,
        },
      ],
}
      









     
    
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
