<template>
  <div class="container">
    <div class="blocks flex-col-reverse sm:flex-row">
      <div class="blocks__left pt-4 sm:pt-32 sm:pb-32 w-full sm:w-2/5">
        <about-me :arr="arrContacts"></about-me>
      </div>
      <div class="blocks__right pt-10 sm:pt-32 sm:pb-32 w-full sm:w-3/5">
        <my-description
          v-for="e in arrGeneral"
          :key="e"
          :name="e.personName"
          :surname="e.surname"
          :vacancy="e.vacancy"
        ></my-description>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import AboutMe from "./pageResume/AboutMe";
import MyDescription from "./pageResume/MyDescription";

export default {
  setup() {
    const store = useStore();
    const arrGeneral = computed(() => store.getters["edit/arrGeneral"]);
    const arrContacts = computed(() => store.getters["edit/arrContacts"]);

    return { arrGeneral, arrContacts };
  },
  components: { AboutMe, MyDescription },
};
</script>
