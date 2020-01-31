<template>
    <div class='user'>
        <div class="user-top">
    	<div class="photo">
                <van-image
                round
                width="80px"
                height="80px"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
    	</div>

    	<div class="base-info">
            <p v-if="!user" @click="toLogin()">去登录</p>
    		<p v-if="user" @click="toMe()">{{username}}
                <van-icon style="float: right;
                right:20px;" name="arrow" />
            </p>
    	</div>
        </div>
        <div>
            <van-cell icon="label-o"  @click="toMyOrder()" title="我的订单" is-link />
            <van-grid>
            <van-grid-item :to="{name:'myOrder',query:{activeName:'全部'}}" icon="label-o" text="全部" />
            <van-grid-item :to="{name:'myOrder',query:{activeName:'待支付'}}" icon="cart-circle-o" text="待支付" />
            <van-grid-item :to="{name:'myOrder',query:{activeName:'待收货'}}" icon="point-gift" text="待收货" />
            <van-grid-item :to="{name:'myOrder',query:{activeName:'待评价'}}" icon="smile-comment" text="待评价" />
            </van-grid>
            <van-cell icon="refund-o"  title="我的优惠券" is-link />
            <van-cell icon="location-o"  title="我的收货地址" is-link />
            <van-cell icon="points"  title="我的积分" is-link />
            <van-cell icon="point-gift"  title="我收到的礼物" is-link />
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    created() {
        // console.log(localStorage.getItem('username'));
        let token = localStorage.getItem('token');
        if(token){
            this.user = true;
        }
        this.loadData();
    },
    data(){
        return{
            user:false,
            username:'',
        }
    },
    methods: {

        toLogin(){
            this.$router.push({name:'login'});
        },
        toMe(){
            this.$router.push({name:'me'});
        },
         loadData() {
      axios.get('http://localhost:3009/api/v1/users/info', {
                    headers: {
                      authorization: "Bearer " + localStorage.getItem("token")
                    }
                  })
      .then(res =>{
          console.log(res);
          this.username =  res.data.userName;
      })
    },
    toMyOrder(){
        this.$router.push({name:'myOrder'});
    }  
      },
}
</script>
<style scoped>
.user-top{
    width: 100%;
  	height:100px;
  	background: #ff6d55;
  	display: flex;
  	align-items: center;
  	font-size: 16px;
  	color: #fff;
}
.photo{
    margin-left: 5%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background:#E5E5E5;
    background-size:100%;
    }
.base-info{
  		margin-left: 5%;
          line-height: 20px;
          width: 100%;
      }
</style>
