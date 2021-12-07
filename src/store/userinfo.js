import Usermodel from "../model/usermodel";

const userInfo = {
    state: {
        user: new Usermodel()
    },
    mutations : {
        store_UserInfo(state, model) {
            state.user = model;
        }
    },
    actions: {
        storeUserInfo ({commit}, model) {
            commit("store_UserInfo", model)
        }
    },
}

export default userInfo
