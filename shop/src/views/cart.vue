<template>
    <div class='cart'>
        <div>
            <div style="text-align:center;" v-if="show">
                <van-icon style="margin-top:40px;" size="100" name="shopping-cart-o" />
                <p>购物车空空如也~~~</p>
                <button style=" width: 80px; height: 30px; text-align: center; color:white;
                 background-color: yellowgreen; border-radius: 30px; border:0px;" @click="toMain()">去逛逛</button>
            </div>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    created() {
        let token = localStorage.getItem('token');
        console.log(token);
        
        if(token){
            this.show = true
        }else{
            this.show = false
        }
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

</style>