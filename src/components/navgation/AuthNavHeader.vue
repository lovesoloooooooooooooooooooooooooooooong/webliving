<template>
    <el-row style="background: #67c0b0" >
        <el-col :span="6" style="margin-top: 20px; margin-bottom: 10px">
            <img src="../../assets/resource/navgation/logo_white.png">
        </el-col>
        <el-col :span="17" style="margin-top: 50px">
            <el-menu router class="el-menu-demo" mode="horizontal" default-active="/UserProfile" background-color="#67c0b0" text-color="#ffffff" active-text-color="#ffffff">
                <el-menu-item index = "5">主页</el-menu-item>
                <el-menu-item index = "/Tutors">预约</el-menu-item>
                <el-menu-item index= "/OnlineClass">课堂</el-menu-item>
                <el-menu-item index= '4'>帮助</el-menu-item>

                <el-submenu index="8">
                    <template slot="title">{{username}}</template>
                    <el-menu-item index= "/UserProfile">个人中心</el-menu-item>
                    <el-menu-item index= "6">账户设置</el-menu-item>
                    <el-menu-item index= "7">退出</el-menu-item>
                </el-submenu>

            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "AuthNavHeader",
        computed: {
            username: function () {
                return this.$store.state.userinfo.user.username;
            }
        }
    }
</script>

<style scoped>
    .el-menu {
        display: flex;
        justify-content: flex-end;
    }
    .el-menu.el-menu--horizontal{
        border: none;
    }
    .el-menu-demo .el-menu-item{
        border-bottom-color:#67c0b0!important;
        /*font-size: 20px;*/
        /*font-weight: bold;*/
    }

</style>
