<template>
<div class="col-10 my-3 mx-auto">
    <h2 v-if="products.length == 0">you'r cart is empty</h2>
    <div v-if="products.length>0" v-for="(item,index) in products" :key="index" class="card" style="width: 60rem;">
        <div class="row no-gutters">
            <div class="col-sm-2">
                <img class="card-img" :src="item.image">
            </div>
            <div class="col-sm-5">
                <div class="card-body">
                     <h4 class="card-title">{{item.name}}</h4>
                    <p class="card-text">{{item.details}}</p>
                    <h6 class="card-text">{{item.price}}$</h6>
                    <button class="btn btn-danger" @click="removeProduct(item,index)">Remove</button> 
                </div>
            </div>
        </div>
    </div>

    <div class="total-cost">
        Total price : {{totalPrice}} $
    </div>
</div>
</template>

<script>

    export default {
        props: ['products','totalPrice','removeProduct'],
    }
</script>


<style scoped>
    h2 {
        color: red;
        font-size: 40px;
        text-align: center;
        text-transform: capitalize;
    }
    .total-cost {
        color: red;
        font-size: 40px;
        text-align: center;
        text-transform: capitalize;
    }
</style>