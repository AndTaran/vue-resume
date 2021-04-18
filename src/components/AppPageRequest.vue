<template>
  <div class="container">
    <div class="wrapper">
      <div class="letter__title" v-if="localCompanyName">
        <h2>{{ title.toUpperCase() }}</h2>
        <request :nameCompany="localCompanyName" :arr="emailData" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Request from "../components/pageRequest/Request";

export default {
  props: {
    title: String,
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const emailData = computed(() => store.getters.emailData);

    const localCompanyName = computed({
      get: () => store.getters.localCompanyName,
      set: (value) => store.commit("setLocalCompanyName", value),
    });

    onMounted(() => {
      async function get() {
        await store.dispatch("getEmailData", localCompanyName.value);
      }
      async function removeLetter() {
        await setTimeout(() => {
          store.commit("clearForm");
          localCompanyName.value = null;
          localStorage.removeItem("localCompanyName");
          router.push("/");
        }, 500);
      }

      get();

      watch(
        () => emailData.value,
        (value) => {
          value == null ? removeLetter() : value;
          console.log("value:", value);
        }
      );
    });

    return { emailData, localCompanyName, store, router };
  },

  components: { Request },
};
</script>
