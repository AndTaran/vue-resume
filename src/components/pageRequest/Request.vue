<template>
  <div class="request__block py-5">
    <h2 class="request__title text-lg lg:text-xl xl:text-2xl">
      {{ nameCompany }}
    </h2>
    <ul
      class="items request__items text-xs w-11/12 md:text-lg md:px-10 lg:w-8/12 lg:text-xl xl:w-6/12 xl:text-2xl"
      v-for="a in arr"
      :key="a.id"
    >
      <li><strong>ID заявки:</strong> {{ a.id }}</li>
      <li><strong>Наименование:</strong> {{ a.company }}</li>
      <li v-if="a.phone"><strong>Контактный телефон:</strong> {{ a.phone }}</li>
      <li>{{ arr.id }}</li>
      <li v-if="a.aboutUs">
        <strong>{{ textareaName(a.target) }}</strong>
        <p class="request__textarea" style="white-space: pre-line">
          {{ a.aboutUs }}
        </p>
      </li>
      <button
        @click="popupOpen(a.id, a.target, a.phone, a.aboutUs)"
        class="request__btn uppercase"
      >
        Изменить
      </button>
      <button
        class="request__btn danger uppercase"
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
      await this.store.commit("updateIdApplication", id);
      await this.store.dispatch("removeRequest", name);
    },
    async popupOpen(id, target, phone, aboutUs) {
      await this.store.commit("updateIdApplication", id);
      await this.store.commit("updateTarget", target);
      await this.store.commit("updateCompanyPhone", phone);
      await this.store.commit("updateAboutUs", aboutUs);
      document.body.classList.toggle("modal-open");
      this.isOpen = true;
    },
    async putRequest() {
      await this.store.dispatch("updateRequest");
      document.body.classList.toggle("modal-open");

      this.isOpen = false;
    },
    closePopup() {
      this.isOpen = false;
      this.store.commit("clearForm");
      document.body.classList.toggle("modal-open");
    },
  },
  components: { RequestPopup },
};
</script>
