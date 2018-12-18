<template>
  <div>
    商品：<input v-model="msg" type="text">
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg:''
      }
    }
  }
</script>