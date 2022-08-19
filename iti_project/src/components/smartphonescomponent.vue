<template>
                <div class="d-flex flex-row flex-wrap justify-content-around ">
                    <div  v-for="phone in smartphones" :key="phone.price" class="card my-3 py-3" style="width:20rem;">
                        <img :src="phone.image" class="card-img-top product-img ">
                        <div class="card-body" >
                            <h5 class="card-title text-center"><a class="text-dark" href="#">{{phone.name}}</a> </h5>
                            <h6 class="card-text my-3">{{phone.price}} $</h6>
                            <div class="text-center">
                                <button class="btn btn-success px-5" @click="addProductToCart">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

</template>
<script>
//  import students from '../students'

import smartphonescomponent from './smartphonescomponent.vue'


export default {
    async created(){
      const res= await fetch("http://localhost:3000/smartphones");
      this.smartphones=await res.json();
    },
    data(){
        return{
        smartphones : [],
        }
    },components:{
    smartphonescomponent,
},
    methods: {
     
    }
}


</script>