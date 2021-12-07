<template>
    <el-row>
        <el-row style="margin-top: 15px" type="flex" justify="space-around">
            <el-col :span="11">
                <InfoCard title="用户信息"></InfoCard>
            </el-col>
            <el-col :span="11">
                <TableCard title="我的预约"></TableCard>
            </el-col>
        </el-row>
<!--        <el-row style="margin-top: 15px" type="flex" justify="space-around">-->
<!--            <el-col :span="11">-->
<!--                <TableCard title="历史记录"></TableCard>-->
<!--            </el-col>-->
<!--            <el-col :span="11">-->
<!--                <TableCard title="我的作业"></TableCard>-->
<!--            </el-col>-->
<!--        </el-row>-->
    </el-row>
</template>

<script>
    import {networkrequest} from "../../network/networkrequest";
    import apiName from "../../network/apiurl";
    import InfoCard from "./InfoCard";
    import TableCard from "./TableCard";
    import Usermodel from "../../model/usermodel";
    import usermodel from "../../model/usermodel";

    export default {
        name: "UserProfile",
        components: {TableCard, InfoCard},
        data() {
            return {
                token : 'Token ' + this.$store.state.user_token
            }
        },
        created: function() {
            this.getUserProfile()
            // this.getUsercourse()
        },
        methods: {


            getUserProfile : function() {
                networkrequest({
                    url: apiName.userprofile_api,
                        method: 'GET',
                        headers:{
                        'Authorization':this.token
                    }
                }).then(res => {
                    let usermodel = new Usermodel();
                    usermodel.userid = res.data.user;
                    usermodel.user_role = res.data.role;
                    console.log(res);
                    this.$store.dispatch("storeUserInfo", usermodel) //让action交给mutation去操作
                    const userid = this.$store.state.userinfo.user.userid
                    this.getUserDetail(userid);
                    this.getUsercourse(userid);
                }).catch(error =>{
                    console.log(error.response)
                })
            },
            getUserDetail: function(userid) {
                networkrequest({
                    url: apiName.userdetail_api,
                    method: 'GET',
                    params: {
                        pk: userid
                    },
                    headers:{
                        'Authorization':this.token
                    }
                }).then(res => {
                    let usermodel = this.$store.state.userinfo.user;
                    usermodel.avatar = res.data.avatar;
                    usermodel.account_balance = res.data.account_balance;
                    usermodel.birthdate = res.data.birthdate;
                    usermodel.gender = res.data.gender;
                    usermodel.gift_balance = res.data.gift_balance;
                    usermodel.nickname = res.data.nickname;
                    usermodel.tel_num = res.data.tel_num;
                    usermodel.total_number_of_classes = res.data.total_number_of_classes;
                    usermodel.useremail = res.data.useremail;
                    usermodel.username = res.data.username;
                    this.$store.dispatch("storeUserInfo", usermodel)
                    console.log(res);
                }).catch(error =>{
                    console.log(error.response)
                })


            },

            //这个是我后来写的获取课程信息
            getUsercourse(userid)
            {
                const obj = {
                    user:userid,
                    is_default: true
                }
                networkrequest({
                    url: apiName.usercourse_api,
                    method: 'GET',
                    params: {
                        user:userid,
                        is_default: true
                    },
                    headers:{
                        'Authorization':this.token
                    }
                }).then(res => {
                    console.log(res);
                    //把课程名字放到了store里面
                    this.$store.commit('setusercourse_name', res.data.course.course_name)



                }).catch(error =>{
                    console.log(error.response)
                })
            }


        }
    }
</script>

<style scoped>

</style>
