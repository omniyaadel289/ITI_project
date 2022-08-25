<template>
<template>{{loadproductdetails ($route.params.id)}}</template>
<div class="d-flex justify-content-center">
                    <div  class="card my-3 py-3 align-items-center" style="width:30rem; max-height: 60rem ;"  >
                        <img :src="productimage" class="card-img-top product-img " style="max-height: 50% ;max-width:50% ;">        
                        <div class="card-body">
                            <h4 class="card-title text-center">{{productname}} </h4>
                            <h6 class="card-title text-left text-warning "> {{productreviews}} Reviews </h6>
                        </div>
                        <h5 class="card-text my-3 px-3 text-success ">{{productprice}} $</h5>
                                                    <div class="text-center">
                                <button class="btn btn-info " id="more" data-toggle="modal" data-target="#exampleModal">More Info</button>
                                                    </div>
                                                    <div class="text-center">
                                <button class="btn btn-success my-2" id="buy"> Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                    </div>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h5 class="modal-title text-info" id="exampleModalLabel">Details</h5>
      </div>
      <div class="modal-body">
        <h3 class="text-">{{productdetails}}</h3>
      </div>
      <div class="text-right">
        <a style="width:5rem ;" type="button" class="btn btn-danger text-light my-3 mx-3 " data-dismiss="modal">Close</a>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            productid:'',
            productimage:'',
            productname:'',
            productdetails:'',
            productprice:'',
            productreviews:''
        }
        },
        methods:{
           async loadproductdetails(_id){
           const res = await fetch(`http://localhost:3000/allproducts/${_id}`);
           let obj = await res.json();
           this.productid=obj.id;
           this.productimage=obj.image;
           this.productname=obj.name;
           this.productdetails=obj.details;
           this.productprice=obj.price;
           this.productreviews=obj.totalReviews;
           }
        }
    }

</script>
<style scoped>
button{
    width: 20rem;
}
</style>