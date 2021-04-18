<template>
  <div class="request__block">
    <h2 class="request__title">{{ nameCompany }}</h2>
    <ul class="items request__items" v-for="a in arr" :key="a.id">
      <li>ID заявки: {{ a.id }}</li>
      <li>Наименование: {{ a.company }}</li>
      <li v-if="a.phone">Контактный телефон: {{ a.phone }}</li>
      <li>{{ arr.id }}</li>
      <li v-if="a.aboutUs">
        {{ textareaName(a.target) }}
        <p class="request__textarea" style="white-space: pre-line">
          {{ a.aboutUs }}
        </p>
      </li>
      <button
        @click="popupOpen(a.id, a.target, a.phone, a.aboutUs)"
        class="request__btn"
      >
        Изменить
      </button>
      <button
        class="request__btn danger"
        @click.prevent="updateIdApplication(a.id, a.company)"
      >
        Удалить
      </button>
    </ul>
    <request-popup
      title="Изменить заявку"
      v-if="isOpen"
      @closePopup="closePopup"
      @putRequest="putRequest"
    ></request-popup>
  </div>
  <div v-if="isOpen" @click="closePopup" class="modal-backdrop"></div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { textareaName } from "../../utils/textareaMap";
import RequestPopup from "../pageRequest/RequestPopup";

export default {
  props: {
    arr: Array,
    nameCompany: String,
  },
  setup() {
    const store = useStore();
    const isOpen = ref(false);

    return { textareaName, store, isOpen };
  },
  methods: {
    async updateIdApplication(id, name) {
      await this.store.commit("setIdApplication", id);
      await this.store.dispatch("removeRequest", name);
    },
    async popupOpen(id, target, phone, aboutUs) {
      await this.store.commit("setIdApplication", id);
      await this.store.commit("updateTarget", target);
      await this.store.commit("updateCompanyPhone", phone);
      await this.store.commit("updateAboutUs", aboutUs);
      this.isOpen = true;
      document.body.classList.add("modal-open");
    },
    async putRequest() {
      await this.store.dispatch("updateRequest");
      document.body.classList.remove("modal-open");
      this.isOpen = false;
    },
    closePopup() {
      this.isOpen = false;
      this.store.commit("clearForm");
      document.body.classList.remove("modal-open");
    },
  },
  components: { RequestPopup },
};
</script>
