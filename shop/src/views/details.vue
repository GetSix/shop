<template>
    <div class='details'>
        <van-sticky>
        <van-nav-bar
      style="margin-bottom:10px;"
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    </van-sticky>
    <section class="main">
      <div class="pimg">
        <img :src="img" alt style="width:100%;display:block;" />
      </div>
      <div class="info" style="position:relative">
        <van-card :price="price" :desc="desc" :title="name" :origin-price="price" />
        <span style="position:absolute;right:1rem;top:4.6rem; font-size:14px; color:#e25450;">已售:999</span>
      </div>
      <p style="height:1rem;background:#ddd;"></p>
      <div class="pimg-b">
        <img :src="img" alt style="width:100%;display:block;" />
        <img
          style="width:100%;display:block;"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          alt
        />
      </div>
    </section>
    <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服"  />
    <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart()" />
    <van-goods-action-button type="warning" text="加入购物车" @click="addCart(id)" />
    </van-goods-action>
</div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            id:'',
            name:'',
            desc:'',
            price:'',
            img:'',
        }
    },
    created() {
    this.id = localStorage.getItem("id");
    console.log(this.id);
    axios
      .get(" http://localhost:3009/api/v1/products/" + this.id)
      .then(res => {
        console.log(res.data);
        //当前商品id
        this.id = res.data._id;
        // 当前商品名称
        this.name = res.data.name;
        // 当前商品描述
        this.desc = res.data.descriptions;
        // 当前商品价格
        this.price = res.data.price;
         // 判断是否有商品，有就显示
        if (res.data.coverImg) {
          this.img = res.data.coverImg;
        } else {
          this.img = "https://img.yzcdn.cn/vant/cat.jpeg";
        }
      });
  },
    methods:{
    onClickLeft() {
      history.back();
    },
    toCart() {
      this.$router.push({name:'cart'});
    },
     addCart(id) {
      let num = 1;
      console.log(id);
      axios
        .post(
          "http://localhost:3009/api/v1/shop_carts",
          {
            product: id,
            quantity: num
          },
          {
            headers: {
              authorization: " Bearer " + localStorage.getItem("token")
            }
          }
        )
        .then(res => {
          console.log(res);
           this.$toast(res.data.message);
        });
    },
    }
}
</script>