import axios from "axios";
import { createStore } from "vuex";
const TOKEN_KEY = "localCompanyName";

export default createStore({
  namespaced: true,

  state() {
    return {
      companyName: null,
      aboutUs: null,
      companyPhone: null,
      present: null,
      target: null,
      textareaName: null,
      openLetter: false,
      emailData: [],
      localCompanyName: localStorage.getItem(TOKEN_KEY),
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
    openLetter(state) {
      return state.openLetter;
    },
    emailData(state) {
      return state.emailData;
    },
    localCompanyName(state) {
      return state.localCompanyName;
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
    updateOpenLetter(state, payload) {
      state.openLetter = payload;
    },
    setEmailData(state, payload) {
      state.emailData = payload;
    },
    setLocalCompanyName(state, payload) {
      state.localCompanyName = payload;
      localStorage.setItem(TOKEN_KEY, payload);
    },

    clearForm(state) {
      state.companyName = null;
      state.aboutUs = null;
      state.companyPhone = null;
      state.present = null;
      state.target = null;
      // state.localCompanyName = null;
    },
  },

  actions: {
    async postLetter() {
      // let withoutDots = this.companyName.replace(/[/./]/g, "").trim();

      await axios
        .post(
          `https://vue-resume-984ea-default-rtdb.firebaseio.com/${this.state.companyName}.json`,
          {
            company: this.state.companyName,
            aboutUs: this.state.aboutUs,
            phone: this.state.companyPhone,
            target: this.state.target,
          }
        )
        .then((response) => {
          console.log("response:", response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async getEmailData({ commit }, name) {
      try {
        const { data } = await axios.get(
          `https://vue-resume-984ea-default-rtdb.firebaseio.com/${name}.json`
        );
        const requests = Object.keys(data).map((id) => ({ ...data[id], id }));
        commit("setEmailData", requests);
        // console.log("123", ...requests[0].company);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
