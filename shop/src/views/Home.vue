<template>
  <div class="home">
    <van-tabbar v-model="active">
  <van-tabbar-item :to="{name:'main'}" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item :to="{name:'classify'}" icon="search">分类</van-tabbar-item>
  <van-tabbar-item :to="{name:'cart'}" icon="cart-circle-o">购物车</van-tabbar-item>
  <van-tabbar-item :to="{name:'user'}" icon="friends-o">我的</van-tabbar-item>
</van-tabbar>
 <router-view/>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'home',
  components: {
 
  },
  data(){
    return{
      active:'',
    }
  },
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#home {
  padding: 30px;
}

#home a {
  font-weight: bold;
  color: #2c3e50;
}

#home a.router-link-exact-active {
  color: #42b983;
}

</style>
