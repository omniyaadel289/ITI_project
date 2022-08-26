<template>
                 <div class="d-flex flex-wrap flex-row justify-content-around ">
                    <div  v-for="phone in smartphones" :key="phone.price" class="card border-info my-3 py-3" style="width:21rem; height:35rem ;">
                        <img :src="phone.image" class="card-img-top product-img " style="max-height: 60% ;">
                        <div class="card-body" style="" >
                            <h5 class="card-title text-center">{{phone.name}} </h5>
                        </div>
                        <h6 class="card-text my-3 px-3">{{phone.price}} $</h6>
                        <div class="text-center">
                                <button class="btn btn-success px-5" @click="addProductToCart(phone)">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
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
    props : ['addProductToCart'],
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