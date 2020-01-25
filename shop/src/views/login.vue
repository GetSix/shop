<template>
    <div class='login'>
        <h2>登录</h2>
        用户名：
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        密码：
        <el-input v-model="password" placeholder="请输入密码"></el-input>
        <el-button type="success" @click="toHome()" round>登录</el-button>
        <el-button type="success" @click="toReg()" round>去注册</el-button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            username:'',
            password:'',
        }
    },
    methods: {
        toHome(){
            if(this.username && this.password){
                 axios.get(`http://jx.xuzhixiang.top/ap/api/login.php?username=${this.username}&password=${this.password}`)
                .then(res =>{
                    console.log(res);
                    if(res.data.code == 1){
                       localStorage.setItem('user',res.data.data.username);
                       localStorage.setItem('id',res.data.data.id);
                       localStorage.setItem('token',res.data.data.token);
                    this.$router.push({name:'home'});
                   }
                });
            }
        },
        toReg(){
            this.$router.push({name:"reg"});
        },
    },
}
</script>
<style scoped>
.login{
    width: 500px;
    height: 400px;
    border: solid 1px #3434;
    margin: 0  auto;
    text-align: center;
    margin-top: 500px;
    padding: 0 30px;
}
</style>