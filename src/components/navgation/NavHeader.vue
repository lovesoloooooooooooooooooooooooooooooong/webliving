<template>
    <el-row>
        <el-col :span="7">
            <img src="../../assets/resource/navgation/logo_icon.png">
        </el-col>
        <el-col :span="16">
            <el-row type="flex" justify="end">
                <el-col :span="12">
                    <div style="text-align:right;">
                        <a class="navlog" @click="openRegModal">注 册</a>
                        <a class="navlog" @click="openLoginModal">登 录</a>
                    </div>
                </el-col>
            </el-row>
            <el-row type="flex" justify="end" style="margin-top: 10px">
                <el-col :span="10" style="height: 2px; background: #39afff"></el-col>
            </el-row>
            <el-row type="flex" justify="end">
                <el-col :span="9">
                    <el-menu router active-text-color="#39afff"  default-active="/" class="el-menu-demo" mode="horizontal">
                        <el-menu-item index="/">主页</el-menu-item>
                        <el-menu-item index="/Program">课程</el-menu-item>
                        <el-menu-item index="3">价格</el-menu-item>
                        <el-menu-item index="4">帮助</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-col>
        <Login ref="loginchild" ></Login>
        <Reg ref="regchild"></Reg>

    </el-row>
</template>

<script>
    import Login from "../login/Login";
    import Reg from "../login/Reg";
    import axios from'axios'
    export default {
        name: "NavHeader",
        components: {
            Login,
            Reg,
        },
        data: function (){
            return {
                showLogin: false,

            }
        },
        methods: {
            openRegModal: function () {
                console.log("reg");
                this.$store.commit('setregvisable', true)
                this.$refs.regchild.regvisible = true
            },


            openLoginModal: function () {

                // axios.get('http://127.0.0.1:8000/api/book').then(res=>{
                //     console.log(res.data[0])
                // })
                // this.showLogin = true;

                this.$store.commit('setloginvisable', true)


                this.$refs.loginchild.loginVisible = true
            },

        }
    }
</script>

<style scoped>
    @import "../../assets/css/navgation/header.css";

    .el-menu-demo .el-menu-item{
        border-bottom-color:#ffffff!important;
        font-size: 16px;
    }
    .el-menu.el-menu--horizontal{
        border: none;
    }
</style>
