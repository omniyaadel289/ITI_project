<template>
    <div class="container">
        <div class="row">
          <div class="col-12 " style="background-color: #333;">
        <ul class="d-flex justify-content-around my-3 flex-wrap px-5" style="text-decoration:none;">
            <li><a class="text-light" href="#" @click.prevent="targetcomponent='allproducts'">All Products</a></li>
            <li><a class="text-light" href="#" @click.prevent="targetcomponent='smartphones'">Smart Phones</a></li>
            <li><a class="text-light" href="#" @click.prevent="targetcomponent='notebooks'">Notebooks</a></li>
            <li>
              <button type="button" class="btn btn-primary px-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cart <i class="fa-solid fa-cart-shopping"></i></button>
                    <div class="dropdown-menu">
                      <span v-for="item in productToCart" class="dropdown-item d-flex justify-content-between">
                          <img style="width:6rem;height:6rem;" :src="item.image">
                          <div>
                            <p>name : {{item.name}}</p>
                             <p>price : {{item.price}}$</p> 
                          </div>
                       </span>
                      <span class="dropdown-item"><a class="btn btn-primary text-light" @click.prevent="targetcomponent='cart'">View Cart</a></span>
                      <span class="dropdown-header">Total price : {{totalPrice}} $</span>
                    </div>
            </li>
        </ul>
        </div>
    </div>

    <allproducts v-if="targetcomponent === 'allproducts'" :addProductToCart="addProductToCart"/>
    <smartphones v-if="targetcomponent === 'smartphones'" :addProductToCart="addProductToCart"/>
    <notebooks v-if="targetcomponent === 'notebooks'"     :addProductToCart="addProductToCart"/>
    <cart v-if="targetcomponent === 'cart'" :products="productToCart" :totalPrice="totalPrice" :removeProduct="removeProduct"/>


    <!-- <div class="row">
        <keep-alive>
          <component :is="targetcomponent"/>
        </keep-alive>
    </div> -->
</div>
</template>


<script>
import allproducts from './components/allproductscomponent.vue';
import notebooks from './components/notebookscomponent.vue';
import smartphones from './components/smartphonescomponent.vue';
import cart from './components/cartcomponent.vue'
export default {
    data(){
      return{
        targetcomponent:'allproducts',
        productToCart : [],
        totalPrice : 0,
      }
    },
    components: {
      allproducts,
      smartphones,
      notebooks,
      cart,
    },

    methods: {
        addProductToCart : function (product) {
          this.productToCart.push(product);
          this.totalPrice += product.price;
        },
        removeProduct : function(product,index){
            this.productToCart.splice(index, 1);
            this.totalPrice -= product.price;
        },
    },
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

