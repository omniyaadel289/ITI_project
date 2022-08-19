<template>
                <div class="d-flex flex-row flex-wrap justify-content-around align-items-baseline ">
                    <div  v-for="product in allproducts" :key="product.price" class="card my-3" style="width:20rem">
                        <img :src="product.image" class="card-img-top product-img" style="height:18rem">
                        <div class="card-body" >
                            <h5 class="card-title text-center" style=" height:8rem;"><a class="text-dark" href="#">{{product.name}}</a> </h5>
                            <h6 class="card-text my-3">{{product.price}} $</h6>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-success" style="width:20rem; height: 3rem;" @click="addProductToCart">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
 
</template>
<script>
//  import students from '../students'

import allproductscomponent from './allproductscomponent.vue'


export default {
    async created(){
      const res= await fetch("http://localhost:3000/allproducts");
      this.allproducts=await res.json();
    },
    data(){
        return{
        allproducts : [],
        }
    },components:{
    allproductscomponent,
},
    methods: {
     
    }
}


</script>