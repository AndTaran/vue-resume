<template>
  <Navbar title="Заявка" />
  <app-page-request title="Ваша заявка" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import AppPageRequest from "../components/AppPageRequest";
import Navbar from "../components/ui/Navbar";

export default {
  setup() {
    const store = useStore();
    const arrRequest = computed(() => store.getters.emailData);

    return {
      arrRequest,
    };
  },
  components: { Navbar, AppPageRequest },
};
</script>
