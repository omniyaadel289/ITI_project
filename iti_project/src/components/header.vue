<template>
<div class="col-12 bg-dark py-2">
    <ul class="d-flex justify-content-around ">
        <li><a href="#">Allproducts</a></li>
        <li><a href="#">SmartPhones</a></li>
        <li><a href="#">Notebooks</a></li>
        <li><button class="btn btn-primary px-5" data-toggle="dropdown">Cart <i class="fa-solid fa-cart-shopping"></i></button>
                <ul class="dropdown-menu">No products</ul></li>
    </ul>
</div>
</template>
<style scoped>
li{
  display: inline-block;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
a{
    text-decoration: none;
    color: white;
}
</style>