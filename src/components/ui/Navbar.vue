<template>
  <nav class="nav text-sm lg:text-lg xl:text-xl">
    <div class="nav__title">{{ title.toUpperCase() }}</div>
    <div class="hidden sm:block">
      <router-link class="nav__link" to="/">Резюме</router-link>
      <router-link class="nav__link" to="/invite">Пригласить</router-link>
      <router-link class="nav__link" to="/applications" v-if="localCompanyName"
        >Заявки</router-link
      >
    </div>
    <div class="burger block sm:hidden">
      <div class="burger__btn" @click="open = !open">
        <span></span>
      </div>
      <transition name="fade">
        <div class="burger__menu flex flex-col" v-if="open">
          <router-link class="nav__link menu__link" to="/">Резюме</router-link>
          <router-link class="nav__link menu__link" to="/invite"
            >Пригласить</router-link
          >
          <router-link
            class="nav__link menu__link"
            to="/applications"
            v-if="localCompanyName"
            >Заявки</router-link
          >
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    title: String,
  },
  setup() {
    const store = useStore();
    const open = ref(false);

    const localCompanyName = computed({
      get: () => store.getters.localCompanyName,
      set: (value) => store.commit("setLocalCompanyName", value),
    });

    return { localCompanyName, open };
  },
};
</script>
