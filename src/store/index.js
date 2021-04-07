import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      companyName: "",
      aboutUs: "",
      companyPhone: "",
      present: null,
      want: null,
      textareaName: null,
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
    present(state) {
      return state.present;
    },
    want(state) {
      return state.want;
    },
    textareaName(state) {
      return state.textareaName;
    },
  },
  mutations: {
    updateCompanyName(state, newCompanyName) {
      state.companyName = newCompanyName;
    },
    updateAboutUs(state, newAboutUs) {
      state.aboutUs = newAboutUs;
    },
    updateCompanyPhone(state, payload) {
      state.companyPhone = payload;
    },
    updatePresent(state, newPresent) {
      state.present = newPresent;
    },
    updateWant(state, newWant) {
      state.want = newWant;
    },
    updateMessage(state, payload) {
      state.message = payload;
    },
    updateTextareaName(state, payload) {
      state.textareaName = payload;
    },

    clearForm(state) {
      state.companyName = null;
      state.aboutUs = null;
      state.companyPhone = null;
      state.present = null;
      state.want = null;
    },
  },
  actions: {},
  modules: {},
});
