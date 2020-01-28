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
            :key="index">
            <div class="top" @click="todetail(item._id)">
              <img class="cover" :src="item.coverImg" alt />
            <p class="tit">{{item.name}}</p>
            <p class="desc">{{item.descriptions}}</p>
            <div class="price-warp">
              <span class="price">¥{{ item.price }}</span>
              <span class="price2">¥{{ item.price }}</span>
            </div>
            </div>
            <div class="shoppingcart" @click="addCart(item)">
              <van-icon size="30" color="#FFFFFF" name="cart-circle-o" />
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
    addCart(gooditem) {
      axios
        .post(
          "http://localhost:3009/api/v1/shop_carts",
          { product: gooditem._id, isSel: true },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }

          // headers: { authorization: "Bearer " + localStorage.getItem("token") }
        )
        .then(res => {
          console.log(res);
          this.$toast("加入购物车成功");
          this.showCarts();
        });
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
.van-grid-item .cover{
  width: 100px;
  height: 120px;

}
 .tit {
  font-size: 14px;
  text-align: left;
  margin-bottom: 10px;
}
.top{
  text-align: center;
}
.desc{
  font-size: 12px;
  color: #808883;
  text-align: left;
  line-height: 20px;
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
.shoppingcart {
  width: 30px;
  height: 30px;
  line-height: 40px;
  color: #f5f5f5;
  background: rgb(154, 245, 112);
  border-radius: 50%;
}
</style>