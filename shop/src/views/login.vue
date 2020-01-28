<template>
    <div class='login'>
        <h2>登录</h2>
        <van-field
                v-model="username"
                required
                label="用户"
                placeholder="请输入用户名"
                :error-message="err1"
              />
        <br>
         <van-field
                v-model="password"
                required
                label="密码"
                placeholder="请输入密码"
                :error-message="err2"
              />
        <br>
        <button @click="toHome()" round>登录</button>
        <button @click="toReg()" round>去注册</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            username:'',
            password:'',
            err1:'',
            err2:'',
        }
    },
    methods: {
        toHome(){
            if(this.username != '' && this.password != ''){
                 axios.post(`http://localhost:3009/api/v1/auth/login`,{
                    userName: this.username,
                    password: this.password
                 })
                .then(res =>{
                    console.log(res);
                    if(res.data.code ==  "success"){
                        localStorage.setItem('token',res.data.token);
                        this.$router.push({name:'home'});
                   }else{
                       console.log(res);
                   }
                });
            }else if(this.username == ''){
                this.err1 = '用户名不为空'
            }else if(this.password == ''){
                this.err2 = '密码不为空'
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
    margin: 0  auto;
    text-align: center;
}
input{
    border: 0px;
}
button{
    background-color: cornflowerblue;
    border: 0px;
    color: white;
    width: 100px;
    height: 40px;
    border-radius: 30px;
    margin: 0 30px;
}

</style>