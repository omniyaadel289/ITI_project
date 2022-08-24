<template>
    <div class="container">
        <div class="row">
          <div class="col-12 " style="background-color: #333;">
        <ul class="d-flex justify-content-around my-3 flex-wrap px-5" style="text-decoration:none;">
            <li><router-link to ='/allproducts' class="text-light">All Products</router-link></li>
            <li><router-link to='/smartphones' class="text-light" >Smart Phones</router-link></li>
            <li><router-link to='/notebooks' class="text-light"  >Notebooks</router-link></li>
            <li>
              <button type="button" class="btn btn-primary px-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cart <i class="fa-solid fa-cart-shopping"></i><span class="circle"></span></button>
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
                       <div class="text-center my-3"><router-link to='/cart'  class="btn btn-primary text-light">View Cart</router-link></div>
                      <span class="dropdown-header"><b>Total Price : {{totalPrice}} $</b></span>
                    </div>
            </li>
        </ul>
        </div>
    </div>
    <router-view></router-view>
    </div>

    
    

</template>
<script>
export default {  
    data(){
      return{
       
        productToCart : [],
        totalPrice : 0,
      }
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

  .newline {
    width: 18rem;
    white-space: pre-wrap;
    word-break: break-word;
}

.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(100, 1, 1, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(1000px);
  opacity: 0;
}</style>