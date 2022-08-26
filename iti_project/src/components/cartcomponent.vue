<template>
<div class="col-9 my-3 mx-auto">
    <h2 class="text-danger" v-if="products.length == 0">No Products <br>Back to list of products...</h2>
    <div v-if="products.length>0" v-for="(item,index) in products" :key="index" class="card border-success my-3" style="max-width: 55rem;">
        <div class="row no-gutters">
            <div class="col-sm-4">
                <img class="card-img" :src="item.image" style="max-height:30rem; max-width: 30rem ;">
            </div>
            <div class="col">
                <div class="card-body">
                     <h4 class="card-title">{{item.name}}</h4>
                    <p class="card-text">{{item.details}}</p>
                    <h5 class="card-text text-success my-2">{{item.price}}$</h5>
                    <button class="btn btn-danger my-3" @click="removeProduct(item,index)">Remove</button> 
                </div>
            </div>
        </div>
    </div>

    <div v-if="products.length>0" class="text-success text-right my-2">
       <h2> Total price : {{totalPrice}} $</h2>
    </div>
</div>

</template>

<script>


    export default {
        props: ['products','totalPrice','removeProduct'],
        }
        


</script>


<style scoped>

</style>