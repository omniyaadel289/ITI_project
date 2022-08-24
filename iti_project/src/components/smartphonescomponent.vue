<template>
                 <div class="d-flex flex-wrap justify-content-around ">
                    <div  v-for="phone in smartphones" :key="phone.price" class="card my-3 py-3" style="width:20rem; height:30rem ;">
                        <img :src="phone.image" class="card-img-top product-img " style="max-height: 50% ;">
                        <div class="card-body" style="" >
                            <h5 class="card-title text-center"><router-link :to="'/productdetails' + phone.id" class="text-dark" href="#">{{phone.name}}</router-link> </h5>
                            <h6 class="card-text my-3 px-3">{{phone.price}} $</h6>
                        </div>
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
    // props : ['addProductToCart'],
    data(){
        return{
        smartphones : [],
        PhoneToCart : localStorage.getItem("product") ? JSON.parse( localStorage.getItem("product"))  : [],
        }
    },components:{
    smartphonescomponent,
},
    methods: {

        addProductToCart: function(product){
            this.PhoneToCart.push(product)
            localStorage.setItem("product",JSON.stringify(this.PhoneToCart))
        },
    }
}


</script>