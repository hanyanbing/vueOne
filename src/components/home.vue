<template>
  <div>
    <header></header>
    <h1>顶部推荐</h1>
    
    <ul class="tab">
      <li><router-link v-bind:to="'/food'">商品</router-link></li>
      <li><router-link v-bind:to="'/talk'">评论</router-link></li>
    </ul>
    
    <!-- 缓存 -->
    <keep-alive> 
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不被缓存 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'welcome!'
      }
    }
  }
</script>

<style scoped>
  h1{
    height: 100px;
  }
  .tab {
    display: flex;
    width: 100%;
    height: 38px;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    line-height: 40px;
  }
  .tab li{
    flex:1;
    text-align: center;
  }
  .tab li a{
    display: block;
  }
</style>
