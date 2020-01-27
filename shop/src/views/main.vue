<template>
    <div class='main'>
        <header>
            <van-sticky>
            <van-search
            v-model="value"
            shape="round"
            background="#4fc08d"
            placeholder="请输入搜索关键词"
            />
            </van-sticky>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </header>
        <van-grid :gutter="10" :column-num="2">
        <van-grid-item
            v-for="(item , index) in list"
            :key="index"
            @click="todetail(item._id)">
            <img :src="item.coverImg" alt />
            <p class="tit">{{item.name}}</p>
            <p class="desc">{{item.descriptions}}</p>
            <div class="price-warp">
              <span class="price">¥{{ item.price }}</span>
              <span class="originPrice">¥{{ item.price }}</span>
              <van-icon style="margin-left: 30px; " color="#3bba63" size="30" name="cart-circle-o" />
            </div>
        </van-grid-item>
        </van-grid>
        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            value:'',
            list:[],
        }
    },
    created() {
    this.loadData();
    this.isLogin();
  },
    methods:{
        todetail(id) {
      localStorage.setItem("id", id);
      this.$router.push({
        name: "details"
      });
    },
    isLogin() {
      if (localStorage.getItem("token")) {
      } else {
        this.$router.push({ name: "login" });
      }
    },
    loadData(){
        axios.get('http://localhost:3009/api/v1/products',{
            params: {
                page: 9 
                }
        })
        .then(res =>{
            console.log(res);
            this.list = res.data.products;
            console.log(this.list);
            
        })
    }
    }
}
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-grid{
    margin-top: 15px;
    margin-bottom: 55px;
}
.van-grid-item {
  font-size: 14px;
}
.van-grid-item img {
  width: 100px;
  height: 120px;
  margin: 15px 0px;
}
 .tit {
  margin: 0px;
  width: 116px;
  height: 42px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price {
  margin: 0px;
  width: 80px;
  height: 18px;
  font-size: 18px;
  color: #f37078;
  display: inline-block;
}
.price2 {
  margin: 0px;
  width: 80px;
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}
</style>