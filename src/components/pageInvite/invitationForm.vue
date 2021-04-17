<template>
  <div class="titles__form">
    <h2 class="form__title">{{ title }}</h2>
    <h4 class="subtitle">{{ subtitle }}</h4>
  </div>

  <form class="form" id="form">
    <div class="form-control">
      <label for="target">Мы хотим:</label>
      <select id="target" class="select" v-model="updateTarget">
        <option value="null" selected>Выберите</option>
        <option value="interview">Пригласить на собеседование</option>
        <option value="thanks">Поблагодарить за интерес</option>
        <option value="mistakes">Указать на ошибки</option>
      </select>
    </div>

    <div class="form-control">
      <label for="present">Мы представляем:</label>
      <select id="present" class="select" v-model="newPresent">
        <option value="null" selected>Выберите</option>
        <option value="company">Компанию</option>
        <option value="startup">Startup</option>
        <option value="ip">ИП</option>
      </select>
    </div>

    <div class="form-control">
      <label for="companyName">Наименование</label>
      <input type="text" id="companyName" v-model="newName" />
    </div>

    <div class="form-control">
      <label for="textarea">{{ textareaName(titleTextarea) }} </label>
      <textarea id="textarea" v-model="newAboutUs" />
    </div>

    <div class="form-control" v-if="titleTextarea == 'interview'">
      <label for="phone">Телефон</label>
      <input type="text" id="phone" v-model="newCompanyPhone" />
    </div>

    <button class="btn" @click="clearForm" type="reset">Очистить</button>
  </form>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { textareaName } from "../../utils/textareaMap";

export default {
  props: {
    title: String,
    subtitle: String,
  },
  setup() {
    const store = useStore();

    const titleTextarea = computed(() => store.getters.target);

    const updateTarget = computed({
      get: () => store.getters.target,
      set: (value) => store.commit("updateTarget", value),
    });

    const newPresent = computed({
      get: () => store.getters.present,
      set: (value) => store.commit("updatePresent", value),
    });

    const newName = computed({
      get: () => store.getters.companyName,
      set: (value) => store.commit("updateCompanyName", value),
    });

    const newAboutUs = computed({
      get: () => store.getters.aboutUs,
      set: (value) => store.commit("updateAboutUs", value),
    });

    const newCompanyPhone = computed({
      get: () => store.getters.companyPhone,
      set: (value) => store.commit("updateCompanyPhone", value),
    });

    return {
      newName,
      newAboutUs,
      newCompanyPhone,
      newPresent,
      updateTarget,
      store,
      titleTextarea,
      textareaName,
    };
  },
  methods: {
    clearForm() {
      this.store.commit("clearForm");
    },
  },
};
</script>

<style lang="scss">
.titles__form {
  padding: 0 5px;
}
.select option {
  color: black;
  font-weight: 300;
}
.form__title {
  font-size: 30px;
  font-weight: 500;
  color: rgb(220, 220, 220);
}
.subtitle {
  font-weight: 300;
  font-size: 25px;
  color: rgb(220, 220, 220);
  margin-bottom: 70px;
}

.form {
  padding: 15px 15px;
  color: rgb(220, 220, 220);
}
.form-control {
  position: relative;
  margin-bottom: 1.5rem;
}
.form-control input,
.form-control select,
.form-control textarea {
  font-weight: 300;
  margin: 0;
  outline: none;
  border: 2px solid #ccc;
  display: block;
  width: 100%;
  padding: 8px 0px;
  border-radius: 3px;
  font-size: 1rem;
  resize: vertical;
}

.form-control small {
  color: #e53935;
}

.form-control.invalid input {
  border-color: #e53935;
}

.form-control label {
  display: block;
  margin: 0 0 0.3rem 0.3rem;
  font-weight: 500;
}

.form-control input:active,
.form-control textarea:focus,
.form-control input:focus {
  transition: border 0.22s;
  border: 2px solid #42b983;
}
.btn {
  border: none;
  padding: 6px 0px;
  border-radius: 10px;
  font-size: 1rem;
  width: 70%;
  color: rgb(36, 106, 111);
  background-color: rgb(220, 220, 220);
  cursor: pointer;
  transition: background-color 400ms;
  &:hover {
    background-color: rgb(194, 194, 194);
  }
  &:active {
    box-shadow: 1px 2px 4px black;
  }
}
</style>
