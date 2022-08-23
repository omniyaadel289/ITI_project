<template>
    <div class="container">
        <div class="row">
          <div class="col-12 " style="background-color: #333;">
        <ul class="d-flex justify-content-around my-3 flex-wrap px-5" style="text-decoration:none;">
            <li><a class="text-light" href="#" @click.prevent="targetcomponent='allproducts'">All Products</a></li>
            <li><a class="text-light" href="#" @click.prevent="targetcomponent='smartphones'">Smart Phones</a></li>
            <li><a class="text-light" href="#" @click.prevent="targetcomponent='notebooks'">Notebooks</a></li>
            <li>
              <button type="button" class="btn btn-primary px-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cart <i class="fa-solid fa-cart-shopping"></i><span class="badge badge-success ml-2">products.lenght</span></button>
                    <div class="dropdown-menu">
                    <div  v-for="item in productToCart"  class="dropdown-item card">
                    <div class="text-center">
                        <img :src="item.image" class="card-img-top product-img " style="height:5rem; width: 5rem;">
                        </div>
                        <div class="card-body">
                          <div class="newline text-center">
                            {{item.name}} 
                            </div>
                            <h6 class="card-text text-success my-3 ">{{item.price}} $</h6>
                        </div>
                        </div>
                       <div class="text-center my-3"><a  class="btn btn-primary text-light" @click.prevent="targetcomponent='cart'">View Cart</a></div>
                      <span class="dropdown-header"><b>Total Price : {{totalPrice}} $</b></span>
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
  font-family:'Lucida Sans';
  font-size: large;
  
}
a{
    text-decoration: none;
}
/* appear
.leave-enter-active {
    transition: all 0s;
  }
  .appear-enter-active {
    animation: appear-animation 2s;
  }
  @keyframes appear-animation {
    0% {
      transform: translateY(10%);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }*/

    /* fade
    .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }*/
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
</style>

