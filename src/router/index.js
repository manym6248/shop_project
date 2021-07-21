import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Madia from '../views/Madia.vue'
import Blog from '../views/Blog.vue'
import ProductPage from '../views/ProductPage.vue'
import User from '../views/usersite/User.vue'
import Main from '../Main.vue'
import NotFoundPage from '../components/NotFoundPage.vue'
import Product from '../components/Product.vue'
import Cart from '../components/Cart.vue'
import Edituserinformation from '../components/Edituserinformation/Edituserinformation.vue'



// admin panel

//import Admin from '../views/admin/Admin.vue'
import Admin from '../views/admin/views/dashboard/Admin.vue'
import Dashboard from '../views/admin/views/dashboard/Dashboard.vue'
import UserProfile from '../views/admin/views/dashboard/pages/UserProfile.vue'
import AddProduct from '../views/admin/views/dashboard/products/AddProduct.vue'
import EditProduct from '../views/admin/views/dashboard/products/EditProduct.vue'
import Categorized from '../views/admin/views/dashboard/products/Categorized.vue'
import Subcategory from '../views/admin/views/dashboard/products/Subcategory.vue'
import Editsubcategory from '../views/admin/views/dashboard/products/editsubcategory.vue'
import Edituser from '../views/admin/views/dashboard/usersite/Edituser.vue'
import Newuser from '../views/admin/views/dashboard/usersite/Newuser.vue'
import Comments from '../views/admin/views/dashboard/Comments/Comments.vue'

import Notifications from '../views/admin/views/dashboard/component/Notifications.vue'
import Edituserinformationadmin from '../views/admin/views/dashboard/component/Edituserinformationadmin.vue'
import Icons from '../views/admin/views/dashboard/component/Icons.vue'
import Typography from '../views/admin/views/dashboard/component/Typography.vue'
import RegularTables from '../views/admin/views/dashboard/tables/RegularTables.vue'
import GoogleMaps from '../views/admin/views/dashboard/maps/GoogleMaps.vue'
import Upgrade from '../views/admin/views/dashboard/Upgrade.vue'


//Login and Register
 import Login from '../components/auth/Login.vue'
 import Register from '../components/auth/Register.vue'


 /////
//  import index from '../store/index'

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
        path: 'productpage/:id',
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
      {
        path: 'login',
        name: 'Login',
        component:Login,
        meta: {
          requiresVisitor: true,
        }
          
      },
      {
        path: 'register',
        name: 'Register',
        component:Register,
          
      },
      {
        path: 'product/:id',
        name: 'Product',
        component:Product,
          
      },
      {
        path: 'cart',
        name: 'Cart',
        component:Cart,
          
      },
      {
        path: 'User',
        name: 'user',
        component:User,
        meta: {
          requiresAuth: true,
        }
          
      },
      {
        path: 'edituserinformation/:id',
        name: 'Edituserinformation',
        component:Edituserinformation,
          
      },
    ]
  },

 
  {
    path: '*',
    name: 'NotFoundPage',
    component:NotFoundPage,
      
  },
 

{
  path: '/admin',
  name: 'Admin',
  component:Admin,
  meta: {
    requiresAuth: true,
  },
  
  // beforeEnter: (to, from, next) => {
  //   if (!index.getters['auth/authenticated']) {
  //     return next({
  //       name: 'Login',
  //     })
  //   }
  //   next()
  // },
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
          path: '/products/subcategory/:id',
          component: Subcategory,
        },
        {
          name: 'Editsubcategory',
          path: '/products/editsubcategory/:id',
          component: Editsubcategory,
        },
        {
          name: 'Newuser',
          path: '/usersite/newuser',
          component: Newuser,
        },
        {
          name: 'Edituser',
          path: '/usersite/edituser',
          component: Edituser,
        },
        {
          name: 'Comments',
          path: '/Comments/comments',
          component: Comments,
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
        {
          name: 'Edituserinformationadmin',
          path: '/component/edituserinformationadmin/:id',
          component:Edituserinformationadmin,
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
  routes,
  scrollBehavior () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 0)
    })
  },
  
})




export default router
