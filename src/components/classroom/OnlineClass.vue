<template>


<!--    <a href="test.html" target="_blank" @click="classroominfo"><button>aaa</button></a>-->
    <a href="test.html"  ><button @click="classroominfo">aaa</button></a>
<!--   !!!!! 能够在vue里面跳转到新页面的方法是 在vue.config.js里面配置一下page属性，这样在vue使用a标签跳转html页面的时候就可以直接用文件名称了-->
</template>


<script>
    // import  {AgoraEduSDK} from'agora-classroom-sdk'
    import {networkrequest} from "../../network/networkrequest";
    import apiName from "../../network/apiurl";

    export default {
        name: "OnlineClass",
        data() {
            return {
                token : 'Token ' + this.$store.state.user_token,
                rtmtoken:'',
                userUuid1:'',
                roomUuid:''

            }
        },
        methods:{
            setCookie(c_name,value,expiredays){
                var exdate=new Date();
                exdate.setDate(exdate.getDate()+expiredays);
                document.cookie=c_name+ "=" +escape(value)+
                ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
            },
            
            classroominfo()
            {
                this.setCookie('userUuid1', this.userUuid1)
                this.setCookie('rtmtoken', this.rtmtoken)
                this.setCookie('roomUuid', '321')

                // window.localStorage.setItem("userUuid1", this.userUuid1)
                // window.localStorage.setItem("rtmtoken", this.rtmtoken)
                // window.localStorage.setItem("roomUuid", "123")

                console.log('success!!!!')
            },

        },
        created() {
                console.log(this.token)
                networkrequest({
                    url: apiName.rtmToken_api,
                    method: 'GET',
                    headers:{
                        'Authorization':this.token
                    }
                }).then(res => {
                    console.log(res.data)
                    this.rtmtoken = res.data.rtmtoken
                    this.userUuid1 = res.data.userUuid1
                    this.roleType = res.data.roleType
                }).catch(error =>{
                    console.log(error.response)
                })

        }


    }



</script>



<style scoped>
    #root1 {
        width: 100%;
        height: 100%;
    }
</style>