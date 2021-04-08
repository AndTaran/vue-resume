import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      companyName: null,
      aboutUs: null,
      companyPhone: null,
      present: null,
      target: null,
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
    target(state) {
      return state.target;
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
    updateTarget(state, newTarget) {
      state.target = newTarget;
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
      state.target = null;
    },
  },
  actions: {},
  modules: {},
});
