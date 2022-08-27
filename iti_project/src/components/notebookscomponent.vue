<template>
                 <div class="d-flex flex-row flex-wrap justify-content-around">
                    <div  v-for="(notebook,index) in notebook" :key="notebook.price" class="card border-info my-3 py-3" style="width:21rem; height: 35rem;">
                        <img :src="notebook.image" class="card-img-top product-img" style="max-height: 60% ;">
                        <div class="card-body" >
                             <h5><a href=""  @click="handelModel(index)" data-toggle="modal" data-target="#mymodal" class="card-title text-center text-dark ">{{notebook.name}}</a></h5>
                        </div>
                        <h6 class="card-text my-3 px-3">{{notebook.price}} $</h6>
                            <div class="text-center">
                                <button class="btn btn-success px-5" @click="addProductToCart(notebook)">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                    </div>
                </div>
      <div v-if="openModel == true" class="modal" id="mymodal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center">
                               <img :src="notebook[productModel].image" class="modal-img"/>
                                <div id="newline">
                                <h3>{{notebook[productModel].name}}</h3>
                                <h6 class="my-2">{{notebook[productModel].details}}</h6>
                                <stars class="my-2" :rate="rated(notebook[productModel].stars)"/>
                                <h6 class="text-left ">{{notebook[productModel].totalReviews}} Reviews.</h6>
                                <h5 class="text-left text-success my-3"><b>{{notebook[productModel].price}}$</b></h5>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger ml-3" data-dismiss="modal" data-target="#mymodal">Close</button>
                       <button class="btn btn-success px-4" @click="addProductToCart(notebook[productModel])">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template> 
<script>

import notebookscomponent from './notebookscomponent.vue'
import stars from './stars.vue';



export default {
    async created(){
      const res= await fetch("http://localhost:3000/notebook");
      this.notebook=await res.json();
    },
    props : ['addProductToCart'],
    data(){
        return{
        notebook : [],
         productModel : 0,
        openModel : false,
        }
    },components:{
    notebookscomponent,
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
        width: 300px ;
    }
</style>