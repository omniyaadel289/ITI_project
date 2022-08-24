<template>
<div class="col-9 my-3 mx-auto">
    <h2 class="text-danger" v-if="products.length == 0">No Products <br>Back to list of products...</h2>
    <div v-if="products.length>0" v-for="(item,index) in products" :key="index" class="card my-3" style="width: 50rem;">
        <div class="row no-gutters">
            <div class="col-sm-2">
                <img class="card-img" :src="item.image">
            </div>
            <div class="col-sm-5">
                <div class="card-body">
                     <h4 class="card-title">{{item.name}}</h4>
                    <p class="card-text">{{item.details}}</p>
                    <h6 class="card-text text-success my-2">{{item.price}}$</h6>
                    <button class="btn btn-danger my-3" >Remove</button> 
                </div>
            </div>
        </div>
    </div>

    <div v-if="products.length>0" class="text-success text-left">
       <h2> Total price :  $</h2>
    </div>
</div>
</template>

<script>

   export default {
    
    data(){
        return{
            products : localStorage.getItem("product") ? JSON.parse( localStorage.getItem("product"))  : [],
        }
    },
    // methods: {

    // }
}


</script>


<!-- <style scoped>

</style> -->