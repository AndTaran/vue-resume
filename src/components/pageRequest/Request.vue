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
        class="request__btn"
        @click.prevent="updateIdApplication(a.id, a.company)"
      >
        Удалить
      </button>
    </ul>
    <request-popup
      title="Изменить заявку"
      class="popup"
      v-if="isOpen"
      @closePopup="closePopup"
      @putRequest="putRequest"
    ></request-popup>
  </div>
  <div v-if="isOpen" @click="isOpen = false" class="modal-backdrop"></div>
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
    },
    async putRequest() {
      await this.store.dispatch("updateRequest");
      this.isOpen = false;
    },
    closePopup() {
      this.isOpen = false;
      this.store.commit("clearForm");
    },
  },
  components: { RequestPopup },
};
</script>

<style lang="scss">
.request__title {
  letter-spacing: 2px;
  font-weight: 500;
}
.request__block {
  padding: 10px 0;
}
.request__items {
  cursor: pointer;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 50%;
  margin: 10px auto;
  padding: 15px;
  font-weight: 300;
  background-color: rgb(220, 220, 220);
  transition: all 0.4s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 3px 3px 5px black;
  }
}
.request__textarea {
  word-wrap: break-word;
  text-align: justify;
}
.request__items li {
  margin-bottom: 20px;
}
.request__btn {
  background-color: rgb(36, 106, 111);
  color: rgb(220, 220, 220);
  border: none;
  width: 40%;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.1s ease;
  &:hover {
    background-color: rgb(72, 127, 131);
  }
  &:active {
    box-shadow: 1px 2px 4px black;
  }
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
}
</style>
