import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from "./userinfo";
Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    user_token : '',
    is_login : false,
    loginvisable:false,
    regvisable:false,
    usercourse_name:'',

  },
  mutations: {
    storeUsertoken(state, token) {
      state.user_token = token
    },
    setLoginStatus(state, islogin){
      state.is_login = islogin
    },
    setloginvisable(state, loginvisable)
    {
      state.loginvisable = loginvisable
    },
    setregvisable(state, regvisable)
    {
      state.regvisable = regvisable
    },
    setusercourse_name(state, usercourse_name)
    {
      state.usercourse_name = usercourse_name
    }
  },
  actions: {

  },
  modules: {
    userinfo: userInfo
  }
})


