<template>
  <nav class="nav">
    <div class="nav__title">{{ title.toUpperCase() }}</div>
    <div>
      <router-link class="nav__link" to="/">Резюме</router-link>
      <router-link class="nav__link" to="/invite">Пригласить</router-link>
      <router-link class="nav__link" to="/applications" v-if="localCompanyName"
        >Заявки</router-link
      >
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    title: String,
  },
  setup() {
    const store = useStore();

    const localCompanyName = computed({
      get: () => store.getters.localCompanyName,
      set: (value) => store.commit("setLocalCompanyName", value),
    });

    return { localCompanyName };
  },
};
</script>
