<template>
    <div class='myOrder'>
         <van-sticky>
        <van-nav-bar
      style="margin-bottom:10px;"
      title="我的订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    </van-sticky>
    <van-tabs v-model="activeName">
  <van-tab title="全部" name="全部">内容 1</van-tab>
  <van-tab title="待支付" name="待支付">内容 2</van-tab>
  <van-tab title="待收货" name="待收货">内容 3</van-tab>
  <van-tab title="待评价" name="待评价">内容 3</van-tab>
</van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeName: '全部'
        }
    },
    created() {
        this.activeName = this.$route.query.activeName;
        console.log( this.$route.query.activeName);
        
    },
    methods: {
       onClickLeft(){
           this.$router.push({name:'user'})
       }
    },
}
</script>