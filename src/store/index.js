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
      // openLetter: false,
      emailData: [],
      localCompanyName: localStorage.getItem(TOKEN_KEY),
      idApplication: null,
    };
  },

  getters: {
    companyName: (state) => state.companyName,
    aboutUs: (state) => state.aboutUs,
    companyPhone: (state) => state.companyPhone,
    present: (state) => state.present,
    target: (state) => state.target,
    textareaName: (state) => state.textareaName,
    // openLetter: (state) => state.openLetter,
    emailData: (state) => state.emailData,
    localCompanyName: (state) => state.localCompanyName,
    idApplication: (state) => state.idApplication,
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
    // updateOpenLetter(state, payload) {
    //   state.openLetter = payload;
    // },
    setEmailData(state, payload) {
      state.emailData = payload;
    },
    setLocalCompanyName(state, payload) {
      state.localCompanyName = payload;
      localStorage.setItem(TOKEN_KEY, payload);
    },
    setIdApplication(state, IdApplication) {
      state.idApplication = IdApplication;
    },

    clearForm(state) {
      state.companyName = null;
      state.aboutUs = null;
      state.companyPhone = null;
      state.present = null;
      state.target = null;
    },
  },

  actions: {
    async postLetter() {
      let withoutDots = this.state.companyName.replace(/[/./]/g, "").trim();

      await axios
        .post(
          `https://vue-resume-984ea-default-rtdb.firebaseio.com/${withoutDots}.json`,
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
      let withoutDots = name.replace(/[/./]/g, "").trim();
      try {
        const { data } = await axios.get(
          `https://vue-resume-984ea-default-rtdb.firebaseio.com/${withoutDots}.json`
        );
        if (data == null) {
          console.log(data);
          commit("setEmailData", data);
        } else {
          const requests = Object.keys(data).map((id) => ({ ...data[id], id }));
          commit("setEmailData", requests);
          console.log("requests:", requests);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async removeRequest() {
      try {
        await axios.delete(
          `https://vue-resume-984ea-default-rtdb.firebaseio.com/${this.getters.localCompanyName}/${this.getters.idApplication}.json`
        );
        // dispatch("getEmailData", this.getters.localCompanyName);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
