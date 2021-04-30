<template>
  <form
    class="request__form fixed z-10 w-4/6 top-16 left-1/4 text-sm md:w-3/6 md:text-base md:px-4 lg:text-lg xl:px-8"
  >
    <h3 class="request__title text-base mb-2 uppercase lg:text-xl">
      {{ title }}
    </h3>
    <div class="form-control">
      <label for="phone">Телефон</label>
      <input
        type="tel"
        id="phone"
        v-model="newCompanyPhone"
        placeholder="Введите номер"
      />
    </div>
    <div class="form-control">
      <label for="textarea"> {{ textareaName(target) }} </label>
      <textarea id="textarea" v-model="newAboutUs" placeholder="Описание" />
    </div>
    <button
      @click.prevent="$emit('putRequest')"
      class="btn text-sm md:text-base lg:text-lg"
    >
      Изменить
    </button>
    <button
      @click.prevent="$emit('closePopup')"
      class="btn text-sm md:text-base lg:text-lg"
    >
      Закрыть
    </button>
  </form>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { textareaName } from "../../utils/textareaMap";

export default {
  props: {
    title: String,
  },

  setup() {
    const store = useStore();

    const newAboutUs = computed({
      get: () => store.getters.aboutUs,
      set: (value) => store.commit("updateAboutUs", value),
    });

    const newCompanyPhone = computed({
      get: () => store.getters.companyPhone,
      set: (value) => store.commit("updateCompanyPhone", value),
    });
    const target = computed(() => store.getters.target);

    return {
      newCompanyPhone,
      newAboutUs,
      target,
      textareaName,
    };
  },
};
</script>
