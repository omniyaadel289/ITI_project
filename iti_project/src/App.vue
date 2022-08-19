<template>
<div class="container">
    <div class="row">
       <div class="col-12 " style="background-color: #333;">
    <ul class="d-flex justify-content-around my-3 flex-wrap px-5" style="text-decoration:none;">
        <li><a class="text-light" href="#" @click.prevent="targetcomponent='allproducts'">All Products</a></li>
        <li><a class="text-light" href="#" @click.prevent="targetcomponent='smartphones'">Smart Phones</a></li>
        <li><a class="text-light" href="#" @click.prevent="targetcomponent='notebooks'">Notebooks</a></li>
        <li><button type="button" class="btn btn-primary px-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cart <i class="fa-solid fa-cart-shopping"></i></button>
                <div class="dropdown-menu">
                  <span class="dropdown-item"><img style="width:6rem;height:6rem;" src=""> <p>name </p><p>price</p> </span>
                  <span class="dropdown-item"><a class="btn btn-primary text-light" @click.prevent="targetcomponent='cart'">View Cart</a></span>
                  <div class="dropdown-divider"></div>
                  <span class="dropdown-header">Total price : $</span>
                </div></li>
    </ul>
</div>
    </div>
    <div class="row">
        <keep-alive>
          <component :is="targetcomponent"/>
        </keep-alive>
    </div>
</div>
</template>
<script>
import allproducts from './components/allproductscomponent.vue'
import notebooks from './components/notebookscomponent.vue'
import smartphones from './components/smartphonescomponent.vue'
import cart from './components/cartcomponent.vue'
export default {
  data(){
    return{
      targetcomponent:'allproducts'
    }
  },
  components: {
    allproducts,
    smartphones,
    notebooks,
    cart,
}
}
</script>
<style scoped>
li{
  display: inline-block;
  font-family:'Lucida Sans';
  font-size: large;
}
a{
    text-decoration: none;
}
</style>

