<template>
    <div class='cart'>
            <div style="text-align:center;" v-if="show">
                <van-nav-bar class="top" title="购物车" />
                <van-icon style="margin-top:40px;" size="100" name="shopping-cart-o" />
                <p>购物车空空如也~~~</p>
                <button style=" width: 80px; height: 30px; text-align: center; color:white;
                 background-color: yellowgreen; border-radius: 30px; border:0px;" @click="toMain()">去逛逛</button>
            </div>
            <div>
                <van-sticky>
                <van-nav-bar class="top" title="购物车" right-text="删除" @click-right="delCarts" />
                </van-sticky>
                <div class="cartslist">
                <div class="goodcart" v-for="(item,index) in cart" :key="index">
                    <div class="img">
                    <van-checkbox
                        class="sincheckbox"
                        @click="checkSel(item,index)"
                        v-model="item.isSel"
                        checked-color="#07c160"
                    />
                    <img :src="item.product.coverImg" alt />
                    </div>
                    <div class="handle">
                    <p class="goodsname">{{item.product.name}}</p>
                    <div class="price">
                        <span>￥{{item.product.price}}</span>
                        <div class="add">
                        <div @click="subOne(item,index)">-</div>
                        <div class="num">{{ item.quantity }}</div>
                        <div @click="addOne(item,index)">+</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                <div class="pay">
                <div class="allSel">
                    <!-- <input type="checkbox" v-model="allChecked" value="111" /> -->
                    <van-checkbox @click="checkAll()" v-model="allChecked" checked-color="#07c160">全选</van-checkbox>
                </div>
                <div class="payele">
                    <div class="total">合计:{{totalPrice}}</div>
                    <div class="payend" @click="toAccounts()">结算({{ totalNum }})</div>
                </div>
                </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    created() {
        this.isLogin();
        this.showCart();
    },
    data(){
        return{
            show:false,
            cart:[],
        }
    },
    methods: {
        isLogin() {
        if (localStorage.getItem("token")) {
        } else {
            this.$router.push({ name: "login" });
        }
        },
        toMain(){
            this.$router.push({name:'main'})
        },
        showCart(){
            axios.get('http://localhost:3009/api/v1/shop_carts',{
            headers: {
                authorization: "Bearer " + localStorage.getItem("token")
            }})
            .then(res =>{
                console.log(res.data);
                if(res.data.length == 0){
                    console.log(111)
                    this.show = true;
                }else{
                    this.cart = res.data;
                }
            })
        }
    },
}
</script>
<style scoped>
.cart {
  width: 100%;
  box-sizing: border-box;
  background: #e2e2d9;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
}
.cartslist {
  flex: 1;
  overflow-y: auto;
}
.cart .goodcart {
  width: 100%;
  height: 120px;
  background: #ffffff;
  display: flex;
  margin-top: 10px;
}
.cart .goodcart .sincheckbox {
  margin-left: 10px;
}
.cart .goodcart .goodsname{
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cart .goodcart .img {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
}
.cart .goodcart .img img {
  height: 60%;
  margin: 0 auto;
}
.cart .goodcart .handle {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.cart .goodcart .handle p {
  text-align: left;
}
.cart .goodcart .handle .price {
  display: flex;
  justify-content: space-between;
}
.cart .goodcart .handle .price .add {
  padding-right: 5px;
  display: flex;
}
.cart .goodcart .handle .price .add div {
  width: 20px;
  height: 20px;
}
.cart .goodcart .handle .price .add .num {
  background: #f5f5f5;
  width: 30px;
  text-align: center;
}
.cart .pay {
  height: 60px;
  width: 100%;
  background: #f5f5f5;
  /* background: rgba(27, 192, 35, 0.493); */
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  bottom: 50px;
  left: 0;
  z-index: 100;
}
.pay .payele {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pay .payele .payend {
  width: 100px;
  height: 40px;
  background: red;
  border-radius: 30px;
  line-height: 40px;
  color: #f5f5f5;
}
</style>