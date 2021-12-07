<template>
    <el-dialog title="登录"  :visible.sync="$store.state.loginvisable" width="30%"  :before-close="handleClose">
        <el-row>
            <el-col :span="20" :offset="2">
                <el-input autofocus = true placeholder="请输入用户名" v-model="username" clearable></el-input>
            </el-col>
        </el-row>
        <el-row style="margin-top: 10px">
            <el-col :span="20" :offset="2">
                <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
            </el-col>
        </el-row>

        <span slot="footer" class="dialog-footer">
            <el-button @click = cancelLogin>注 册</el-button>
            <el-button type="primary" @click= sureLogin>登 录</el-button>
         </span>
    </el-dialog>
</template>

<script>
    import {networkrequest} from "../../network/networkrequest"
    import apiName from "../../network/apiurl"


    import axios from 'axios';



    // import store from "../../store"
    export default {
        name: "Login",
        props:{
            //loginVisible: Boolean
        },
        data: function() {
            return {
                // loginVisible: false,
                username: '',
                pwd: ''
            };
        },
        created : function() {

        },
        methods: {
            handleClose: function(done) {
                this.$store.state.loginvisable = false;
                done();
            },
            cancelLogin : function() {
                this.$store.state.loginvisable = false;
                this.$store.state.regvisable = true;
                // this.$emit('closeLogin');
            },
            sureLogin : function() {

                if (this.username.length ==0) {
                    this.$message({
                        message: '请输入用户名',
                        type: 'warning'
                    });
                    return;
                }
                if (this.pwd.length == 0){
                    this.$message({
                        message: '请输入密码',
                        type: 'warning'
                    });
                }

                networkrequest({
                    url: apiName.token_api,
                    method: 'POST',
                    data: {
                        username: this.username,
                        password: this.pwd
                    }
                }).then(res => {
                    console.log(res.data.token)
                    const usertoken = res.data.token
                    this.$store.commit('setLoginStatus', true)
                    this.$store.commit('storeUsertoken', usertoken)
                    this.$store.commit('setloginvisable', false)
                    // this.$store.state.loginvisable = false
                    this.$router.push('userprofile')
                }).catch(error =>{
                    console.log(error.response)
                })
            }
        }
    }
</script>

<style scoped>

</style>
