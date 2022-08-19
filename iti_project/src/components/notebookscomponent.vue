<template>
                <div class="d-flex flex-row flex-wrap justify-content-around">
                    <div  v-for="notebook in notebook" :key="notebook.price" class="card my-3" style="width:20rem">
                        <img :src="notebook.image" class="card-img-top product-img" style="height:18rem">
                        <div class="card-body" >
                            <h5 class="card-title text-center" style=" height:8rem;"><a class="text-dark" href="#">{{notebook.name}}</a> </h5>
                            <h6 class="card-text my-3">{{notebook.price}} $</h6>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-success" style="width:20rem; height: 3rem;" @click="addProductToCart">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

</template> 
<script>
//  import students from '../students'

import notebookscomponent from './notebookscomponent.vue'


export default {
    async created(){
      const res= await fetch("http://localhost:3000/notebook");
      this.notebook=await res.json();
    },
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