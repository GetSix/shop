<template>
  <div class="home">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item v-if="show">用户名：{{username}}</el-menu-item>
        <el-menu-item index="1" @click="login()">{{show?'退出':'请登录'}}</el-menu-item>
        <!-- <el-menu-item v-if="show" index="2" @click="login()">退出</el-menu-item> -->
      </el-menu>
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
       activeIndex2: '1',
       show:false,
       handleSelect:'',
       username:'',
    }
  },
  created() {
   let token = localStorage.getItem('token');
   console.log(token);
    if(token){
      this.show = true;
      this.username = localStorage.getItem('user');
    }else{
      this.show = false;
    }
  },
  methods: {
    login(){
      this.$router.push({name:"login"});
    },
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
