<template>
  <div class="talkList">

    <ul class="imageList" >
      <li v-for="item in imgList">
        谁呀<img :src="item.url"  alt="">
      </li>
      
    </ul>  
    <!-- 左侧菜单 -->
    <div class="leftMenu">
      
    </div>
    <!-- 右侧列表 -->
    <div class="rightList">
      
    </div>
  </div>
</template>

<style>
  .imageList img{
    display: inline-block;
    width: 100px;
    height: 100px;
  }
</style>

<script>
  // import anxious form 'anxious';
  export default {
    data(){
      return {
        msg:'',
        imgList:[]
      }
    },
    mounted(){
      this.$http.get('https://gank.io/api/data/福利/10/1').then(res=>{
        this.imgList = res.body.results;
        console.log(res.body.results);
      });
    }
  }
</script>