<template>
  <div class="letter">
    <div class="letter__border" v-if="newTitle(title)">
      <h2>{{ newTitle(title) }}</h2>

      <div v-if="title == 'interview'">
        <h4 class="company__title">
          <p>Добрый день, Андрей!</p>
        </h4>
        <p v-if="companyName">Мы представляем {{ newPresent(present) }}</p>
        <strong>{{ companyName }}</strong>
        <p>
          Нас заинтересовал твой сайт - резюме и мы хотим пригласить тебя на
          собеседование
        </p>
        <div class="comapany__text" v-if="aboutUs">
          <h4>{{ textareaName(title) }}</h4>
          <p class="company__textarea" style="white-space: pre-line">
            {{ aboutUs }}
          </p>
        </div>
        <div class="company__phone" v-if="companyPhone">
          <h4>Наш телефон для связи:</h4>
          {{ companyPhone }}
        </div>
      </div>

      <div v-else-if="title == 'thanks'">
        <h4 class="company__title">
          <p>Добрый день, Андрей!</p>
        </h4>
        <p v-if="companyName">Мы представляем {{ newPresent(present) }}</p>
        <strong>{{ companyName }}</strong>
        <p>
          Мы ознакомились с твоим резюме и благодарны за проявленный интерес
        </p>
        <div class="comapany__text" v-if="aboutUs">
          <h4>{{ textareaName(title) }}</h4>
          <p class="company__textarea" style="white-space: pre-line">
            {{ aboutUs }}
          </p>
        </div>
        <div class="company__phone" v-if="companyPhone">
          <h4>Наш телефон для связи:</h4>
          {{ companyPhone }}
        </div>
      </div>

      <div v-else-if="title == 'mistakes'">
        <h4 class="company__title">
          <p>Добрый день, Андрей!</p>
        </h4>
        <p v-if="companyName">Мы представляем {{ newPresent(present) }}</p>
        <strong>{{ companyName }}</strong>
        <p>Мы изучили твой проект и хотим сообщить о найденных ошибках</p>
        <div class="comapany__text" v-if="aboutUs">
          <h4>{{ textareaName(title) }}</h4>
          <p class="company__textarea" style="white-space: pre-line">
            {{ aboutUs }}
          </p>
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
import { newPresent } from "../../utils/presentMap";
import { newTitle } from "../../utils/titleMap";
import { textareaName } from "../../utils/textareaMap";

export default {
  setup() {
    const store = useStore();

    const companyName = computed(() => store.getters.companyName);
    const companyPhone = computed(() => store.getters.companyPhone);
    const aboutUs = computed(() => store.getters.aboutUs);
    const present = computed(() => store.getters.present);
    const title = computed(() => store.getters.want);

    return {
      companyName,
      companyPhone,
      aboutUs,
      present,
      newPresent,
      newTitle,
      title,
      textareaName,
    };
  },
};
</script>

<style lang="scss">
.letter {
  font-family: "Marck Script", cursive;
  padding: 40px 80px 0px;
  color: black;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 20px;
  &__border {
    border: 1px solid black;
    padding: 15px;
    color: rgb(36, 106, 111);
  }
  .company__title {
    font-weight: 700;
  }
  .company__textarea {
    word-break: normal;
    font-weight: 400;
    text-align: justify;
  }
}
</style>
