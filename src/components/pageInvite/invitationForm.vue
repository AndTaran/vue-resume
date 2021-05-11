<template>
  <div class="titles__form">
    <h2 class="form__title sm:text-2xl lg:text-3xl xl:text-4xl">{{ title }}</h2>
    <h4 class="subtitle pt-2 mb-10 sm:text-lg lg:text-xl xl:text-2xl">
      {{ subtitle }}
    </h4>
  </div>

  <form
    class="form text-xs sm:text-sm lg:text-base xl:text-lg lg:mx-3.5"
    id="form"
  >
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

    <div class="form-control" :class="{ invalid: v$.newName.$error }">
      <label for="companyName">Наименование*</label>
      <input
        type="text "
        id="companyName"
        v-model="v$.newName.$model"
        @blur="v$.newName.$touch"
      />
      <small v-if="v$.newName.$error"
        >Введите наименование(мин. 3 символа)</small
      >
    </div>

    <div class="form-control">
      <label for="textarea">{{ textareaName(titleTextarea) }} </label>
      <textarea id="textarea" v-model="newAboutUs" />
    </div>

    <div class="form-control" v-if="titleTextarea == 'interview'">
      <label for="phone">Телефон</label>
      <input type="tel" id="phone" v-model="newCompanyPhone" />
    </div>

    <button
      class="btn text-xs sm:text-sm lg:text-base xl:text-lg"
      @click.prevent="clearForm"
      type="reset"
    >
      Очистить
    </button>
  </form>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
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
      v$: useVuelidate(),
    };
  },

  validations() {
    return {
      newName: {
        required,
        minLength: minLength(3),
      },
    };
  },
  methods: {
    clearForm() {
      this.store.commit("clearForm");
      // this.v$.newName.$reset;
    },
  },
};
</script>
