<template>
    <el-dialog title="注册"  :visible.sync="$store.state.regvisable" width="30%"  :before-close="handleClose">
        <el-row>
            <el-col :span="20" :offset="2">
                <el-input autofocus = true placeholder="请输入用户名" v-model="username" clearable></el-input>
            </el-col>
        </el-row>
        <el-row style="margin-top: 10px">
            <el-col :span="20" :offset="2">
                <el-input placeholder="请输入密码" v-model="pwd1" show-password></el-input>
            </el-col>
        </el-row>
        <el-row style="margin-top: 10px">
            <el-col :span="20" :offset="2">
                <el-input placeholder="请再输入一遍密码" v-model="pwd2" show-password></el-input>
            </el-col>
        </el-row>

        <span slot="footer" class="dialog-footer">
            <el-button @click = surereg>注 册</el-button>
            <el-button type="primary" @click= cancelReg>登 录</el-button>
        </span>
    </el-dialog>
</template>

<script>
    import {networkrequest} from "../../network/networkrequest";
    import apiName from "../../network/apiurl";

    export default {
        name: "Reg",
        data: function() {
            return {
                // RegVisible: false,
                username: '',
                pwd1: '',
                pwd2:''
            };
        },
        methods: {


            regAccount() {
                const object = {
                    username: '',
                    password1: '',
                    password2: ''
                };
            },
            surereg()
            {
                if (this.username.length ==0) {
                    this.$message({
                        message: '请输入用户名',
                        type: 'warning'
                    });
                    return;
                }
                if (this.pwd1.length == 0||this.pwd2.length== 0){
                    this.$message({
                        message: '请输入密码',
                        type: 'warning'
                    });
                }
                if(this.pwd1!=this.pwd2)
                {
                    this.$message({
                        message: '两次输入密码不一致，请重输!',
                        type: 'warning'
                    });
                    this.pwd2 = ''
                }
                networkrequest({
                    url: apiName.reg_api,
                    method: 'POST',
                    data: {
                        username: this.username,
                        password1: this.pwd1,
                        password2: this.pwd2
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
                    const res1 = error.response.data.password1//根据返回的data里面错误信息来针对性报错 2021年4月26日00:49:30
                    const res2 = error.response.data.password2
                    const res3 = error.response.data.username
                    if(error.response.status == 400)
                    {
                        // if(error.response.data.password1)
                        if (res1!= undefined)
                        {
                            this.$message({

                                message: res1[0],
                                type: 'warning'
                            });
                            console.log(res1[0])
                        }


                        else if (res2!= undefined)
                        {
                            this.$message({

                                message: res2[0],
                                type: 'warning'
                            });
                            // console.log(res2)
                        }

                        else if (res3 != undefined)
                        {
                            this.$message({

                                message: res3[0],
                                type: 'warning'
                            });
                        }

                    }



                })

            },
            handleClose: function(done) {
                this.$store.state.regvisable = false;
                done();
            },
            cancelReg : function() {
                this.$store.state.loginvisable = true;
                this.$store.state.regvisable = false;
                // this.$emit('closeLogin');
            },

        }
    }
</script>

<style scoped>

</style>
