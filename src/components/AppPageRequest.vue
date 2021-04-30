<template>
  <div class="container">
    <div class="wrapper">
      <h2
        class="letter__title py-4 text-lg md:text-xl lg:text-2xl xl:text-3xl"
        v-if="localCompanyName"
      >
        {{ title.toUpperCase() }}
      </h2>
      <app-loader v-if="loading"></app-loader>
      <request v-else :nameCompany="localCompanyName" :arr="emailData" />
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
    title: String,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const loading = ref(true);

    const emailData = computed(() => store.getters.emailData);

    const localCompanyName = computed({
      get: () => store.getters.localCompanyName,
      set: (value) => store.commit("setLocalCompanyName", value),
    });

    onMounted(() => {
      function get() {
        store.dispatch("getEmailData", localCompanyName.value);
        loading.value = false;
      }
      function removeLetter() {
        loading.value = true;
        setTimeout(() => {
          store.commit("clearForm");
          localCompanyName.value = null;
          localStorage.removeItem("localCompanyName");
          router.push("/");
          loading.value = false;
        }, 500);
      }

      setTimeout(() => get(), 300);

      watch(
        () => emailData.value,
        (value) => {
          value == null ? removeLetter() : value;
        }
      );
    });

    return { emailData, localCompanyName, store, router, loading };
  },

  components: { Request, AppLoader },
};
</script>
