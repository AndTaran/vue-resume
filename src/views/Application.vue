<template>
  <Navbar title="Заявка" />
  <app-page-request
    :title="
      arrRequest == null
        ? 'Заявок нет'
        : arrRequest.length > 1
        ? 'Ваши заявки'
        : 'Ваша заявка'
    "
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import AppPageRequest from "../components/AppPageRequest";
import Navbar from "../components/ui/Navbar";

export default {
  setup() {
    const store = useStore();

    return {
      arrRequest: computed(() => store.getters.emailData),
    };
  },
  components: { Navbar, AppPageRequest },
};
</script>
