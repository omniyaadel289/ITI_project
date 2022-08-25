import {createRouter,createWebHistory} from 'vue-router';
//import  wrapper from '../Appe.vue'
import allproducts from '../components/allproductscomponent.vue'
import smartphones from '../components/smartphonescomponent.vue'
import notebooks from '../components/notebookscomponent.vue'
import cart from '../components/cartcomponent.vue'
import productdetails from '../components/productdetailscomponent.vue'

const routes =[
    {path:'/',component:allproducts},
    {path:'/smartphones',component:smartphones},
    {path:'/notebooks',component:notebooks},
    {path:'/cart',component:cart},
    {path:'/productdetails:id',component:productdetails , props:true}
];
const router = createRouter ({
    history : createWebHistory(),
    routes

});

export default router;