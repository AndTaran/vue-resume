<template>
  <h2 class="form__title">{{ title }}</h2>
  <h4 class="subtitle">{{ subtitle }}</h4>
  <form class="form">
    <div class="form-control">
      <label for="status">Мы представляем:</label>
      <select id="status">
        <option value="done">Компанию</option>
        <option value="cancelled">Startup</option>
        <option value="active">ИП</option>
        <option value="pending">Внеземную цивилизацию</option>
      </select>
    </div>

    <div class="form-control">
      <label for="companyName">Наименование</label>
      <input type="text" id="companyName" v-model="newName" />
    </div>

    <div class="form-control">
      <label for="textarea">Немного о нас:</label>
      <textarea id="textarea" v-model="newAboutUs" />
    </div>

    <div class="form-control">
      <label for="phone">Телефон</label>
      <input type="text" id="phone" v-model="newCompanyPhone" />
    </div>

    <button class="btn" @click="updateCompany" type="submit" name="submit">
      Посмотреть
    </button>
    <button class="btn" @click="clearForm" type="reset" name="reset">
      Очистить
    </button>
  </form>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: {
    title: String,
    subtitle: String,
  },
  setup() {
    const store = useStore();
    return {
      newName: store.getters.companyName,
      newAboutUs: store.getters.aboutUs,
      newCompanyPhone: store.getters.companyPhone,
      store,
    };
  },
  methods: {
    updateCompany() {
      this.store.commit("updateCompanyName", this.newName);
      console.log(this.$store.state.companyName);
      this.store.commit("updateAboutUs", this.newAboutUs);
      console.log(this.$store.state.aboutUs);
      this.store.commit("updateCompanyPhone", this.newCompanyPhone);
      console.log(this.$store.state.companyPhone);
    },
    clearForm() {
      this.store.commit("clearForm", null);
      this.newName = "";
      this.newAboutUs = "";
      this.newCompanyPhone = "";
    },
  },
};
</script>

<style lang="scss" scoped>
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
