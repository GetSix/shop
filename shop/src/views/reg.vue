<template>
    <div class='reg'>
        <h2>注册</h2>
        
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
        <button type="success" @click="reg()" round>注册</button>
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
        reg(){
            let reg = /^[a-zA-Z0-9_-]{4,16}$/;
            if(reg.test(this.username)){
                let reg1 = /^[a-zA-Z0-9]{4,10}$/;
                if(reg1.test(this.password)){
                     axios.post("http://localhost:3009/api/v1/auth/reg",{
                    userName: this.username,
                    password: this.password,
                    })
                    .then(res =>{
                        console.log(res);
                        if(res.data.code ==  "success"){
                            this.$router.push({name:'login'});
                        }else{
                             this.err1 = '用户名已存在';
                        }
                    });
                }else{
                    this.err2 = '密码不能含有非法字符，长度在4-10之间（字母，数字）组成'
                }
            }else{
                this.err1 = '4到16位（字母，数字，下划线，减号）组成';
            }
        }
    },
}
</script>
<style scoped>
.reg{
    height: 100%;
    border: solid 1px #3434;
    margin: 0  auto;
    text-align: center;
}
input{
    border: 0px;
}
span{
    color: green;
}
</style>