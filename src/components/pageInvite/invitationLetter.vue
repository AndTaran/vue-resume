<template>
  <div class="letter">
    <div class="letter__border" v-if="newTitle">
      <h2>{{ newTitle }}</h2>
      <div v-if="newTitle == TITLE_MAP.interview">
        <h4 class="company__title">
          <p v-if="companyName">Мы представляем {{ newPresent }}</p>
          <strong>{{ companyName }}</strong>
        </h4>
        <p>
          Нас заинтересовал твой сайт - резюме и мы хотим пригласить тебя на
          собеседование
        </p>
        <div class="comapany__text" v-if="aboutUs">
          <h4>Для начала немного о нас:</h4>
          <p style="white-space: pre-line">{{ aboutUs }}</p>
        </div>
        <div class="company__phone" v-if="companyPhone">
          <h4>Наш телефон для связи:</h4>
          {{ companyPhone }}
        </div>
      </div>

      <div v-if="newTitle == TITLE_MAP.thanks">
        <h4 class="company__title">
          <p v-if="companyName">Мы представляем {{ newPresent }}</p>
          <strong>{{ companyName }}</strong>
        </h4>
        <p>
          Мы ознакомились с твоим резюме и благодарны за проявленный интерес
        </p>
        <div class="comapany__text" v-if="aboutUs">
          <h4>Для начала немного о нас:</h4>
          <p style="white-space: pre-line">{{ aboutUs }}</p>
        </div>
        <div class="company__phone" v-if="companyPhone">
          <h4>Наш телефон для связи:</h4>
          {{ companyPhone }}
        </div>
      </div>

      <div v-if="newTitle == TITLE_MAP.mistakes">
        <h4 class="company__title">
          <p>Добрый день, Андрей!</p>
        </h4>
        <p v-if="companyName">Мы представляем {{ newPresent }}</p>
        <strong>{{ companyName }}</strong>
        <p>Мы изучили твой проект и хотим сообщить о найденных ошибках</p>
        <div class="comapany__text" v-if="aboutUs">
          <h4>Для начала немного о нас:</h4>
          <p style="white-space: pre-line">{{ aboutUs }}</p>
        </div>
        <div class="company__phone" v-if="companyPhone">
          <h4>Наш телефон для связи:</h4>
          {{ companyPhone }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const companyName = computed(() => store.getters.companyName);
    const companyPhone = computed(() => store.getters.companyPhone);
    const aboutUs = computed(() => store.getters.aboutUs);
    const present = computed(() => store.getters.present);
    const title = computed(() => store.getters.want);

    const PRESENT_MAP = {
      null: null,
      company: "Компанию:",
      startup: "Стартап:",
      ip: "Индивидульного предпринимателя:",
    };
    const newPresent = computed(() =>
      present.value ? PRESENT_MAP[present.value] : null
    );

    const TITLE_MAP = {
      null: null,
      interview: "Пригласительное письмо",
      thanks: "Письмо с благодарностью!",
      mistakes: "Сообщение об ошибках",
    };

    const newTitle = computed(() =>
      title.value ? TITLE_MAP[title.value] : null
    );

    return {
      companyName,
      companyPhone,
      aboutUs,
      newPresent,
      newTitle,
      TITLE_MAP,
    };
  },
};
</script>

<style lang="scss">
.letter {
  padding: 40px 80px 0px;
  color: black;
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 20px;
  &__border {
    border: 1px solid black;
    padding: 15px;
    color: rgb(36, 106, 111);
  }
}
</style>
