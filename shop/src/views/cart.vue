<template>
    <div class='cart'>
        <h1 v-if="show">222</h1>
        <h1 v-if="!show">111</h1>
    </div>
</template>
<script>
export default {
    created() {
        let token = localStorage.getItem('token');
        console.log(token);
        
        if(token){
            this.show = true
        }else{
            this.show = false
        }
    },
    data(){
        return{
            show:true
        }
    }
}
</script>