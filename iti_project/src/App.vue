<template>
    <div class="container">
        <div class="row">
          <div class="col-12 " style="background-color: #333;">
        <ul class="d-flex justify-content-around my-3 flex-wrap px-5" style="text-decoration:none;">
            <li><a class="text-light" href="#" @click.prevent="targetcomponent='allproducts'">All Products</a></li>
            <li><a class="text-light" href="#" @click.prevent="targetcomponent='smartphones'">Smart Phones</a></li>
            <li><a class="text-light" href="#" @click.prevent="targetcomponent='notebooks'">Notebooks</a></li>
            <li>
              <button type="button" id="cartbtn" class="btn text-light " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cart <i class="fa-solid fa-cart-shopping"></i><span v-if="productToCart.length > 0" class="circle">{{productToCart.length}}</span></button>
                    <div class="dropdown-menu">
                    <div  v-for="item in productToCart"  class="dropdown-item disabled card">
                        <div class="text-center">
                          <img :src="item.image" class="card-img-top product-img " style="max-height:5rem; width: 5rem;">
                        </div>
                        <div class="card-body">
                          <div class="newline text-center text-dark">
                            {{item.name}} 
                            </div>
                            <h6 class="card-text text-success my-3 ">{{item.price}} $</h6>
                        </div>
                    </div>
                    
                      <div v-if="productToCart.length > 0" class=" d-flex justify-content-between my-3 mx-2"><b>Total : {{totalPrice}} $ </b> <a  class="btn text-light" style="background-color: #2d9cdb;" @click.prevent="targetcomponent='cart'">View Cart</a></div>
                    
                      <h4 v-if="productToCart.length == 0" class="dropdown-header text-danger mx-5">No Products Yet</h4>
                    </div>
            </li>
        </ul>
        </div>
    </div>

<Transition name="slide-fade">
    <allproducts v-if="targetcomponent === 'allproducts'" :addProductToCart="addProductToCart"/>
      </Transition>
      <Transition name="slide-fade">
    <smartphones v-if="targetcomponent === 'smartphones'" :addProductToCart="addProductToCart"/>
    </Transition>
  <transition name="slide-fade">
    <notebooks v-if="targetcomponent === 'notebooks'"     :addProductToCart="addProductToCart"/>
    </transition>
<transition name="slide-fade">
    <cart v-if="targetcomponent === 'cart'" :products="productToCart" :totalPrice="totalPrice" :removeProduct="removeProduct"/>
</transition>

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
  font-size: large;
  
}
a{
  font-family: sans-serif;
    text-decoration: none;
}
  .newline {
    width: 18rem;
    white-space: pre-wrap;
    word-break: break-word;
}

.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(100, 1, 1, 0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(800px);
  opacity: 0;
}

.circle{
  display: flex;
  justify-content: center;
  position: absolute;
  top: -0.50em;
  right: -0.40em;
     width: 25px;
    height: 25px;
  border-radius: 50%;
  background-color: white;
  color: black;
}
#cartbtn{
  position: relative;
  background-color: #2d9cdb;
      border-radius: 3px;
      padding: 0.3em 2.2em;

}
</style>

