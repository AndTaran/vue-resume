import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      companyName: "",
      aboutUs: "",
      companyPhone: "",
    };
  },
  getters: {
    companyName(state) {
      return state.companyName;
    },
    aboutUs(state) {
      return state.aboutUs;
    },
    companyPhone(state) {
      return state.companyPhone;
    },
  },
  mutations: {
    updateCompanyName(state, newCompanyName) {
      state.companyName = newCompanyName;
    },
    updateAboutUs(state, newAboutUs) {
      state.aboutUs = newAboutUs;
    },
    updateCompanyPhone(state, newCompanyPhone) {
      state.companyPhone = newCompanyPhone;
    },
    clearForm(state) {
      state.companyName = null;
      state.aboutUs = null;
      state.companyPhone = null;
    },
  },
  actions: {},
  modules: {},
});
