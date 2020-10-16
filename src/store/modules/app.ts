// import Cookies from 'js-cookie'

const state = {
  userInfo: "userinfo"
};

const mutations = {
  SET_USERINFO: (state: any, userInfo: any) => {
    state.userInfo = userInfo;
  }
};

const actions = {
  setUserInfo(commit: any, userInfo: any) {
    commit.commit("SET_USERINFO", userInfo);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
