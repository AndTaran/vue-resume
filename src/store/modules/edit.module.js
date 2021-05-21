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
          title: "Контакты",
          descr: ["+7(918)29-69-201", "and_taranenko@mail.ru"],
        },
        {
          title: "О себе",
          descr: [
            "- Внимание к деталям;\n- Умение работать в команде;\n- Имею хорошие способности к самообучению и саморазвитию;\n- Большое желание и готовность развиваться в сфере IT.",
          ],
        },
      ],
      arrProfessional: [
        {
          title: "Навыки",
          descr: [
            "HTML",
            "CSS",
            "SCSS",
            "JavaScript",
            "Vue",
            "Vuex",
            "Axios",
            "GIT",
          ],
        },
        {
          title: "Образование",
          descr: [
            "Кубанский государственный аграрный университет",
            "Факультет: экономический",
            "Специальность: экономика предприятий",
            "Год окончания: 2016",
          ],
        },
        {
          title: "Опыт работы",
          descr: [
            "НЕВА, Холдинг Безопасности",
            "Менеджер по продажам",
            "Ноябрь 2016 - Июль 2020",
            "\nТерминал, Строительный комплекс ",
            "Менеджер по закупкам",
            "Декабрь 2020 - Апрель 2021",
          ],
        },
      ],
    };
  },
  getters: {
    arrGeneral: (state) => state.arrGeneral,
    arrContacts: (state) => state.arrContacts,
    arrProfessional: (state) => state.arrProfessional,
  },
  mutations: {
    updateArrGeneral(state, newValue) {
      state.arrGeneral.push(newValue);
    },
    updateArrContacts(state, { contact, aboutMe }) {
      state.arrContacts.push(contact, aboutMe);
    },
    updateArrProfessional(state, { skills, education, workExperience }) {
      state.arrProfessional.push(skills, education, workExperience);
    },

    clearArray(state) {
      state.arrGeneral = [];
      state.arrContacts = [];
      state.arrProfessional = [];
    },
  },
};
