<template>
  <div class="letter">
    <div class="letter__border">
      <span class="company__title"
        >Добрый день, Андрей! Мы представляем компанию: {{ companyName }}</span
      >
      <div class="comapany__text">
        <p>Нас заинтеросовало твоё резюме и мы хотим позвать тебя к нам))</p>
        <p>Для начала немного о нас:</p>
        <p>{{ aboutUs }}</p>
      </div>
      <div class="company__phone">{{ companyPhone }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const companyName = computed(() => store.state.companyName);
    const companyPhone = computed(() => store.state.companyPhone);
    const aboutUs = computed(() => store.state.aboutUs);
    return {
      companyName,
      companyPhone,
      aboutUs,
    };
  },
};
</script>

<style lang="scss">
.letter {
  padding: 40px 80px 0px;
  // color: rgb(36, 106, 111);
  color: black;
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 18px;
  &__border {
    border: 1px solid black;
    padding: 15px;
  }
}
</style>
