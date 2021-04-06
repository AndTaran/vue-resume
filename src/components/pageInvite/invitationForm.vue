<template>
  <h2 class="form__title">{{ title }}</h2>
  <h4 class="subtitle">{{ subtitle }}</h4>
  <form class="form" id="form">
    <div class="form-control">
      <label for="want">Мы хотим:</label>
      <select id="want" class="select" v-model="newWant">
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
      <label for="textarea">{{ textareaName }} </label>
      <textarea id="textarea" v-model="newAboutUs" />
    </div>

    <div class="form-control">
      <label for="phone">Телефон</label>
      <input type="text" id="phone" v-model="newCompanyPhone" />
    </div>

    <button class="btn" @click="updateCompany" type="button">Посмотреть</button>
    <button class="btn" @click="clearForm" type="reset">Очистить</button>
  </form>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    title: String,
    subtitle: String,
  },
  setup() {
    const store = useStore();

    const TEXTAREA_MAP = {
      null: null,
      interview: "Немного о нас:",
      thanks: "Выражение благодарности:",
      mistakes: "Описание ошибок:",
    };
    const titleTextarea = computed(() => store.getters.want);
    const textareaName = computed(() =>
      titleTextarea.value ? TEXTAREA_MAP[titleTextarea.value] : null
    );

    const newWant = computed({
      get: () => store.getters.want,
      set: (value) => store.commit("updateWant", value),
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
      get: () => store.getters.AboutUs,
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
      newWant,
      store,
      textareaName,
    };
  },
  methods: {
    updateCompany() {
      this.store.commit("updateCompanyName", this.newName);
      this.store.commit("updateAboutUs", this.newAboutUs);
      this.store.commit("updateCompanyPhone", this.newCompanyPhone);
      this.store.commit("updatePresent", this.newPresent);
      this.store.commit("updateWant", this.newWant);
    },
    clearForm() {
      this.store.commit("clearForm");
      this.newName = "";
      this.newAboutUs = "";
      this.newCompanyPhone = "";
      this.newPresent = null;
      this.newWant = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.select option {
  color: black;
  font-weight: 300;
}
// .select:last-child {
// }
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
  // color: #2c3e50;
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
  border: 5px solid;
  padding: 6px 0px;
  border-radius: 10px;
  font-size: 1rem;
  width: 70%;
  color: rgb(36, 106, 111);
  background-color: rgb(220, 220, 220);
}
</style>
