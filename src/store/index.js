import axios from "../axios/axios";
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
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
    updateTextareaName(state, newTextareaName) {
      state.textareaName = newTextareaName;
    },
    updateEmailData(state, newEmailData) {
      state.emailData = newEmailData;
    },
    updateLocalCompanyName(state, newLocalCompanyName) {
      state.localCompanyName = newLocalCompanyName;
      localStorage.setItem(TOKEN_KEY, newLocalCompanyName);
    },
    updateIdApplication(state, newIdApplication) {
      state.idApplication = newIdApplication;
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
    async postLetter({ commit }, name) {
      let withoutDots = this.state.companyName.replace(/[/./]/g, "").trim();

      try {
        await axios.post(`/${withoutDots}.json`, {
          company: this.state.companyName,
          aboutUs: this.state.aboutUs,
          phone: this.state.companyPhone,
          target: this.state.target,
        });
        commit("updateLocalCompanyName", name);
      } catch (error) {
        console.log(error);
      }
    },
    async getEmailData({ commit }) {
      if (this.getters.localCompanyName == null) {
        return;
      }
      let withoutDots = this.getters.localCompanyName
        .replace(/[/./]/g, "")
        .trim();
      try {
        const { data } = await axios.get(`/${withoutDots}.json`);
        if (data == null) {
          commit("updateEmailData", null);
        } else {
          //???????????????? ???? ???????? id ????????????, ?????????????????? ?? ???????????? ?? ???????????????????? id
          const requests = Object.keys(data).map((id) => ({ ...data[id], id }));
          commit("updateEmailData", requests);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async removeRequest({ dispatch }, name) {
      let withoutDots = name.replace(/[/./]/g, "").trim();
      try {
        await axios.delete(
          `/${withoutDots}/${this.getters.idApplication}.json`
        );
        dispatch("getEmailData");
      } catch (error) {
        console.log(error);
      }
    },
    async updateRequest({ dispatch, commit }) {
      let withoutDots = this.getters.localCompanyName
        .replace(/[/./]/g, "")
        .trim();
      try {
        await axios.put(`/${withoutDots}/${this.getters.idApplication}.json`, {
          company: this.getters.localCompanyName,
          phone: this.state.companyPhone,
          aboutUs: this.state.aboutUs,
          target: this.state.target,
        });
        dispatch("getEmailData");
        commit("clearForm");
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
