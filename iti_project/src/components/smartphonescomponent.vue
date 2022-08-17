<template>
                <div class="d-flex flex-row flex-wrap justify-content-around align-items-baseline">
                    <div  class="card my-3" style="width:20rem">
                        <img src="" class="card-img-top product-img" alt="" id="productimg">
                        <div class="card-body">
                            <h5 class="card-title text-center">product.name </h5>
                            <p class="card-text text-center"> product.details </p>
                            <h6 class="card-title ">product.price $</h6>
                            <div class="d-flex justify-content-center align-items-baseline">
                                <button class="btn btn-success px-5" @click="addProductToCart">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

</template>

