<template>
  <div class="sort-item">
    <van-grid :gutter="10" :column-num="1">
        <van-grid-item
            v-for="(item , index) in list"
            v-show='item.productCategory.name==cname'
            :key="index">
            <div class="top" @click="todetail(item._id)">
                <div style="float: left;">
                    <img class="cover" :src="item.coverImg" alt />
                </div>
                <div style="float: right; width:145px;">
                    <p class="tit">{{item.name}}</p>
                    <p class="desc">{{item.descriptions}}</p>
                    <div class="price-warp">
                    <span class="price">¥{{ item.price }}</span>
                    <span class="price2">¥{{ item.price }}</span>
                    </div>
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
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      category:[],
      cname:''
    }
  },
  created() {
     this.cname=localStorage.getItem('cname')
     console.log(localStorage.getItem('cname'));
     
      axios.get('http://localhost:3009/api/v1/product_categories').then(res=>{
       console.log(res.data.categories)
       this.category=res.data.categories
       
     })
    axios.get("http://localhost:3009/api/v1/products",{
      params:{
        per:119
      }
    }).then(res => {
      console.log(res.data.products)
      this.list = res.data.products;
      console.log(this.list);
    });
    //  axios.get('http://localhost:3009/api/v1/product_categories').then(res=>{
    //    console.log(res.data.categories)
    //    this.category=res.data.categories
       
    //  })
  },
  methods: {
   todetail(id){
      axios.get('http://localhost:3009/api/v1/products/'+id).then(res=>{
        console.log(res.data)
        localStorage.setItem('id',id)
        this.$router.push({
          name:'details'
        })
      })
    },
    addCart(gooditem){
     axios
        .post(
          "http://localhost:3009/api/v1/shop_carts",
          { product: gooditem._id, isSel: true },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        )
        .then(res => {
          console.log(res);
          this.$toast("加入购物车成功");
          this.showCarts();
        });
    }
  }
};
</script>
<style scoped>
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
  width: 145px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.top{
  text-align: center;
}
.desc{
  font-size: 12px;
  color: #808883;
  text-align: left;
  line-height: 20px;
  width: 145px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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