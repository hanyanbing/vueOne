<template>
  <div class="talkList" ref="talkList">
    <ul class="imageList">
      <li v-for="item in imgList">{{num}}<img :src="item.url" alt="" /></li>
    </ul>
  </div>
</template>

<style>
.talkList {
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}

.imageList li {
  height: 80px;
  text-align: center;
  border-bottom: 1px solid #444;
}
.imageList img {
  display: inline-block;
  height: 80px;
  width: 80px;
}
</style>

<script>
// import anxious form 'anxious';
import BScroll from 'better-scroll';

export default {
  data() {
    return {
      msg: '',
      imgList: [],
      num:1
    };
  },
  created() {
    this.loadData();
  },

  methods:{
    loadData(){
      this.$http.get('https://gank.io/api/data/福利/10/'+this.num).then(res => {
        this.imgList = res.body.results.concat(this.imgList);

        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.talkList, {
            click: true
          });
          this.scroll.on('touchEnd', pos => {
            // 下拉动作
            if (pos.y > 50) {
              console.log('下拉刷新成功');
              this.dropDown = false;
            }
            //上拉加载 总高度>下拉的高度+10 触发加载更多
            if (this.scroll.maxScrollY > pos.y + 10) {
              this.num++;
              console.log('加载更多',this.imgList.length);
              this.loadData();
              //使用refresh 方法 来更新scroll  解决无法滚动的问题
              this.scroll.refresh();
            }
            // console.log(this.scroll.maxScrollY + '总距离----下拉的距离' + pos.y);
          });
        });   
      });
    }
  }
};
</script>
