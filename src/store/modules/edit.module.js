export default {
  namespaced: true,
  state() {
    return {
      arrGeneral: [
        {
          personName: "Андрей",
          surname: "Тараненко",
          vacancy: "Frontend разработчик",
        },
      ],
      arrContacts: [
        {
          phone: "",
          email: "",
        },
        //Остановился тут
      ],
      arrProfessional: [],
    };
  },
  getters: {
    arrGeneral: (state) => state.arrGeneral,
    arrProfessional: (state) => state.arrProfessional,
  },
  mutations: {
    updateArrGeneral(getters, newValue) {
      getters.arrGeneral.push(newValue);
    },
    updateArrProfessional(getters, newValue) {
      getters.arrProfessional.push(newValue);
    },
    clearArray(getters) {
      getters.arrGeneral = [];
    },
  },
};
