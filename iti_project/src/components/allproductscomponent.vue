<template>
                <div class="d-flex flex-row flex-wrap justify-content-around" id="all">
                    <div  v-for="product in allproducts" :key="product.price" class="card border-info my-3 py-3" style="width:21rem; height: 35rem ;">
                        <img :src="product.image" class="card-img-top product-img" style="max-height: 60% ;">
                        <div class="card-body">
                            <h5 class="card-title text-center">{{product.name}} </h5>
                        </div>
                        <h6 class="card-text my-3 px-3">{{product.price}} $</h6>
                                                    <div class="text-center">
                                <button class="btn btn-success px-5" @click="addProductToCart(product)">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                    </div>
                </div>
 
</template>
<script>

import allproductscomponent from './allproductscomponent.vue'


export default {
    async created(){
      const res= await fetch("http://localhost:3000/allproducts");
      this.allproducts=await res.json();
    },
    props : ['addProductToCart'],
    data(){
        return{
        allproducts : [],
        }
    },components:{
    allproductscomponent,
    },
}


</script>
    <style scoped>
          #newline {
    width: 30rem;
    white-space: pre-wrap;
    word-break: break-word;
}
    
    .modal-img{
        max-height: 300px ;
        width: 300px ;
    }
    </style>