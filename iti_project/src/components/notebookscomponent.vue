<template>
                 <div class="d-flex flex-row flex-wrap justify-content-around">
                    <div  v-for="notebook in notebook" :key="notebook.price" class="card border-info my-3 py-3" style="width:21rem; height: 35rem;">
                        <img :src="notebook.image" class="card-img-top product-img" style="max-height: 60% ;">
                        <div class="card-body" >
                            <h5 class="card-title text-center"><a class="text-dark" href="#" data-toggle="modal" data-target="#mymodal">{{notebook.name}}</a> </h5>
                        </div>
                        <h6 class="card-text my-3 px-3">{{notebook.price}} $</h6>
                            <div class="text-center">
                                <button class="btn btn-success px-5" @click="addProductToCart(notebook)">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                    </div>
                </div>
<div class="modal" id="mymodal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div v-for="notebook in notebook" :key="notebook.price" class="modal-body text-center">
                                <img :src="notebook.image" class="modal-img"/>
                                <div id="newline">
                                <h3>{{notebook.name}}</h3>
                                <h6>{{notebook.details}}</h6>
                                <h6 class="text-left text-success">{{notebook.price}}$</h6>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <span class="close" data-dismiss="modal" data-target="#mymodal" ><button class="btn btn-success px-5" @click="addProductToCart(notebook)">Buy Now <i class="fa-solid fa-cart-shopping"></i></button></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template> 
<script>

import notebookscomponent from './notebookscomponent.vue'


export default {
    async created(){
      const res= await fetch("http://localhost:3000/notebook");
      this.notebook=await res.json();
    },
    props : ['addProductToCart'],
    data(){
        return{
        notebook : [],
        }
    },components:{
    notebookscomponent,
},
    methods: {
     
    }
}


</script>
<style scoped>
    .modal-img{
        max-height: 300px ;
        width: 300px ;
    }
</style>