<template>
                <div class="d-flex flex-row flex-wrap justify-content-around" id="all">
                    <div  v-for="product in allproducts" :key="product.price" class="card my-3 py-3" style="width:20rem; height: 30rem ;">
                        <img :src="product.image" class="card-img-top product-img" style="max-height: 50% ;">
                        <div class="card-body">
                            <h5 class="card-title text-center"><router-link :to="'/productdetails' + product.id" class="text-dark" href="#" >{{product.name}}</router-link> </h5>
                        </div>
                        <h6 class="card-text my-3 px-3">{{product.price}} $</h6>
                                                    <div class="text-center">
                                <button class="btn btn-success px-5" @click="addProductToCart(product)">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                    </div>
                </div>
                <div class="modal" id="mymodal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div v-for="product in allproducts" :key="product.price" class="modal-body text-center">
                                <img :src="product.image" class="modal-img"/>
                                <div id="newline">
                                <h3>{{product.name}}</h3>
                                <h6>{{product.details}}</h6>
                                <h6 class="text-left text-success">{{product.price}}$</h6>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <span class="close" data-dismiss="modal" data-target="#mymodal" ><button class="btn btn-success px-5" @click="addProductToCart(product)">Buy Now <i class="fa-solid fa-cart-shopping"></i></button></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//  import students from '../students'

// import { json } from 'body-parser';
import allproductscomponent from './allproductscomponent.vue'


export default {
    async created(){
      const res= await fetch("http://localhost:3000/allproducts");
      this.allproducts=await res.json();
    },
    // props : ['addProductToCart'],
    data(){
        return{
        allproducts : [],
        productToCart : localStorage.getItem("product") ? JSON.parse( localStorage.getItem("product"))  : [],
        }
    },components:{
    allproductscomponent,
    },
    methods:{
        addProductToCart: function(product){
            this.productToCart.push(product)
            localStorage.setItem("product",JSON.stringify(this.productToCart))
        }
    }
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