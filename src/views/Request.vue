<template>
  <Navbar title="Заявки" />
  <app-loader v-if="loading" />
  <div class="letter__title" v-else-if="localCompanyName">
    <h2>Ваша заявка</h2>
    <p>Компания: {{ localCompanyName }}</p>
    <!-- <p>{{ emailData }}</p> -->
    <ul class="items" v-for="e in emailData" :key="e.id">
      <li class="item">ID заявки: {{ e.id }}</li>
      <li class="item">Наименование: {{ e.company }}</li>
      <li class="item">Контактный телефон: {{ e.phone }}</li>
    </ul>
    <button class="btn" @click="removeLetter">Удалить</button>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Navbar from "../components/ui/Navbar";
import AppLoader from "../components/ui/AppLoader";

export default {
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
      loading.value = true;
      async function get() {
        await store.dispatch("getEmailData", localCompanyName.value);
      }
      get();
      loading.value = false;
      setTimeout(() => {}, 2000);
    });

    return { emailData, localCompanyName, store, router, loading };
  },
  methods: {
    async removeLetter() {
      await setTimeout(() => {
        this.store.commit("clearForm");
        this.localCompanyName = null;
        localStorage.removeItem("localCompanyName");
        this.router.push("/");
      }, 1000);
    },
  },

  //https://coderius.biz.ua/blog/article/vue-axios

  components: { Navbar, AppLoader },
};
</script>

<style></style>
