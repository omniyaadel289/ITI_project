<template>
<div class="container">
    <div class="row">
       <div class="col-12 bg-dark py-2">
    <ul class="d-flex justify-content-around my-3 " style="text-decoration:none;">
        <li><a class="text-light" href="#" @click.prevent="targetcomponent='allproducts'">Allproducts</a></li>
        <li><a class="text-light" href="#" @click.prevent="targetcomponent='smartphones'">SmartPhones</a></li>
        <li><a class="text-light" href="#" @click.prevent="targetcomponent='notebooks'">Notebooks</a></li>
        <li><button class="btn btn-primary px-5" data-toggle="dropdown">Cart <i class="fa-solid fa-cart-shopping"></i></button>
                <ul class="dropdown-menu">
                  <li class="dropdown-item"><img style="width:4rem;height:4rem;" src="https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg"> <p>name </p><p>price</p> </li>
                  <li class="dropdown-item"><a class="btn btn-primary text-light" @click.prevent="targetcomponent='cart'">View Cart</a></li>
                  <li class="dropdown-header">Total price : $</li>
                </ul></li>
    </ul>
</div>
    </div>
    <div class="row">
      <div class="col-8">
        <keep-alive>
          <component :is="targetcomponent"/>
        </keep-alive>
      </div>
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
}
a{
    text-decoration: none;
}
</style>

