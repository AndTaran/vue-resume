<template>
  <div class="container">
    <div class="mb-14 lg:mb-20 xl:mb-14">
      <div class="fio text-2xl sm:text-5xl xl:text-6xl">{{ surname }}</div>
      <div class="fio text-2xl md:text-5xl xl:text-6xl">{{ name }}</div>
      <div class="job mt-16 text-lg md:text-2xl lg:text-3xl xl:text-4xl">
        {{ vacancy }}
      </div>
    </div>
    <ul v-for="i in arrProfessional" :key="i.title">
      <li>
        <descr-btn
          :title="i.title"
          :elements="i.descr"
          className="skill__title"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import DescrBtn from "./DescrBtn";

export default {
  props: {
    name: {
      type: String,
      default: "Андрей",
      required: true,
    },
    surname: {
      type: String,
      default: "Тараненко",
      required: true,
    },
    vacancy: {
      type: String,
      default: "Junior Frontend разработчик",
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const arrProfessional = computed(
      () => store.getters["edit/arrProfessional"]
    );

    return { arrProfessional };
  },
  components: { DescrBtn },
};
</script>
