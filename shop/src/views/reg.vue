<template>
    <div class='reg'>
        <h2>注册</h2>
        用户名：
        <el-input v-model="user" placeholder="请输入用户名" ></el-input>
        密码：
        <el-input v-model="password" placeholder="请输入密码" ></el-input>
        <el-button type="success" @click="tologin()" round>注册</el-button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            user:'',
            password:'',
        }
    },
    methods: {
        tologin(){
            if(this.user && this.password){
                axios.get(`http://jx.xuzhixiang.top/ap/api/reg.php?username=${this.user}&password=${this.password}`)
                .then(res =>{
                    console.log(res);
                    if(res.data.code == 1){
                        this.$router.push({name:'login'});
                    }else{
                        alert(res.data.msg);
                    }
                });
            }
        }
    },
}
</script>
<style scoped>
.reg{
    width: 400px;
    height: 400px;
    border: solid 1px #3434;
    margin: 0  auto;
    text-align: center;
    margin-top: 500px;
    padding: 0 30px;
}
span{
    color:green;
}
el-input{
    display: inline-block;
}
el-button{
    margin-top: 30px;
}
</style>