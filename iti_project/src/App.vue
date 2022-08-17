<template>
<div class="container">
    <div class="row">
       <Header/>
    </div>
    <div class="row">
         <All/>
    </div>
</div>
</template>
<script>
import Header from './components/header.vue'
import All from './components/allproducts.vue'
export default {
  name: 'App',
  components: {
    Header,
    All
  }
}
</script>
