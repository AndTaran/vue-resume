<template>
  <h2 class="request__title">{{ nameCompany }}</h2>
  <div class="request__block">
    <ul class="items request__items" v-for="a in arr" :key="a.id">
      <li>ID заявки: {{ a.id }}</li>
      <li>Наименование: {{ a.company }}</li>
      <li v-if="a.phone">Контактный телефон: {{ a.phone }}</li>
      <li>{{ arr.id }}</li>
      <li v-if="a.aboutUs">
        {{ textareaName(a.target) }}
        <p>{{ a.aboutUs }}</p>
      </li>
      <button
        class="request__btn"
        @click.prevent="updateIdApplication(a.id, a.company)"
      >
        Удалить
      </button>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { textareaName } from "../../utils/textareaMap";

export default {
  props: {
    arr: Array,
    nameCompany: String,
  },
  setup() {
    const store = useStore();

    return { textareaName, store };
  },
  methods: {
    async updateIdApplication(id, nameComp) {
      await this.store.commit("setIdApplication", id);
      await this.store.dispatch("removeRequest");
      await this.store.dispatch("getEmailData", nameComp);
    },
  },
};
</script>

<style lang="scss">
.request__title {
  letter-spacing: 2px;
  font-weight: 500;
}
.request__items {
  word-break: break-all;
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
.request__items li {
  margin-bottom: 20px;
}
.request__btn {
  background-color: rgb(36, 106, 111);
  color: rgb(220, 220, 220);
  border: none;
  width: 50%;
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
</style>
