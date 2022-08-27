<template>
                 <div class="d-flex flex-wrap flex-row justify-content-around ">
                    <div  v-for="(phone,index) in smartphones" :key="phone.price" class="card border-info my-3 py-3" style="width:21rem; height:35rem ;">
                        <img :src="phone.image" class="card-img-top product-img " style="max-height: 60% ;">
                        <div class="card-body" style="" >
                            <h5><a href="" @click="handelModel(index)" data-toggle="modal" data-target="#mymodal" class="card-title text-center text-dark ">{{phone.name}}</a></h5>
                        </div>
                        <h6 class="card-text my-3 px-3">{{phone.price}} $</h6>
                        <div class="text-center">
                                <button class="btn btn-success px-5" @click="addProductToCart(phone)">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                    </div>
                </div>
            <div v-if="openModel == true" class="modal" id="mymodal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center">
                                <img :src="smartphones[productModel].image" class="modal-img"/>
                                <div id="newline">
                                <h3>{{smartphones[productModel].name}}</h3>
                                <h6 class="my-2">{{smartphones[productModel].details}}</h6>
                                <stars class="my-2" :rate="rated(smartphones[productModel].stars)"/>
                                <h6 class="text-left">{{smartphones[productModel].totalReviews}} Reviews.</h6>
                                <h5 class="text-left text-success my-3"><b>{{smartphones[productModel].price}}$</b></h5>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger ml-3" data-dismiss="modal" data-target="#mymodal">Close</button>
                        <button class="btn btn-success px-4" @click="addProductToCart(smartphones[productModel])">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>

import smartphonescomponent from './smartphonescomponent.vue'
import stars from './stars.vue'

export default {
    async created(){
      const res= await fetch("http://localhost:3000/smartphones");
      this.smartphones=await res.json();
    },
    props : ['addProductToCart'],
    data(){
        return{
        smartphones : [],
         productModel : 0,
        openModel : false,
        }
    },components:{
    smartphonescomponent,
    stars
},
    methods: {
      handelModel : function(index) {
            this.productModel = index;
            this.openModel = true;
        },
               rated(rate) {
      return `${rate * 20}%`;
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
        max-width: 300px ;
    }
</style>