<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="letter__title py-4 text-lg md:text-xl lg:text-2xl xl:text-3xl">
        {{ title }}
      </h2>
      <app-loader v-if="loading"></app-loader>
      <request
        v-else-if="localCompanyName"
        :nameCompany="localCompanyName"
        :arr="emailData"
      />

      <router-link v-else to="/invite"
        ><button class="btn mt-10">Добавить заявку</button></router-link
      >
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Request from "../components/pageRequest/Request";
import AppLoader from "../components/ui/AppLoader";

export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "Заявок нет",
    },
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const loading = ref(true);

    const emailData = computed(() => store.getters.emailData);

    const localCompanyName = computed({
      get: () => store.getters.localCompanyName,
      set: (value) => store.commit("updateLocalCompanyName", value),
    });

    onMounted(() => {
      //При открытии страницы "Заявки" грузит данные с сервера
      function get() {
        if (localCompanyName.value == null) {
          store.commit("updateEmailData", null);
          loading.value = false;
        } else {
          store.dispatch("getEmailData", localCompanyName.value);
          loading.value = false;
        }
      }

      //При удалении всех заявок очищает localStorage
      function removeLetter() {
        loading.value = true;
        setTimeout(() => {
          store.commit("clearForm");
          localCompanyName.value = null;
          localStorage.removeItem("localCompanyName");
          loading.value = false;
        }, 500);
      }

      setTimeout(() => get(), 300);

      //Проверка на наличии заявок
      watch(
        () => emailData.value,
        (value) => {
          value == null ? removeLetter() : value;
        }
      );
    });

    return {
      emailData,
      localCompanyName,
      store,
      router,
      loading,
    };
  },

  components: { Request, AppLoader },
};
</script>
