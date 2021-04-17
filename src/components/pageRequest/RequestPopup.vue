<template>
  <form class="request__form">
    <h3 class="request__title">{{ title }}</h3>
    <div class="form-control">
      <label for="phone">Телефон</label>
      <input
        type="text"
        id="phone"
        v-model="newCompanyPhone"
        placeholder="Введите номер"
      />
    </div>
    <div class="form-control">
      <label for="textarea"> {{ textareaName(target) }} </label>
      <textarea id="textarea" v-model="newAboutUs" placeholder="Описание" />
    </div>
    <button @click.prevent="$emit('putRequest')" class="btn">Изменить</button>
    <button @click.prevent="$emit('closePopup')" class="btn">Закрыть</button>
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

<style lang="scss">
.request__form {
  position: absolute;
  top: 20%;
  left: 32%;
  width: 30%;
  min-height: 300px;
  // margin: 0 auto;
  z-index: 200;
  background-color: rgb(72, 127, 131);
  padding: 30px;
}
.request__title {
  font-size: 20px;
}
.btn.btn {
  margin-bottom: 10px;
}
</style>
