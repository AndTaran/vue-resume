<template>
  <div
    class="letter text-base md:text-lg lg:text-xl lg:mx-3.5 xl:mx-10"
    v-if="newTitle(title)"
  >
    <div class="letter__border">
      <h2>{{ newTitle(title) }}</h2>

      <div v-if="title == 'interview'">
        <h4 class="company__title text-lg md:text-xl lg:text-2xl">
          <p>{{ times }}, {{ myName }}!</p>
        </h4>
        <p v-if="companyName">Мы представляем {{ newPresent(present) }}</p>
        <strong class="text-lg md:text-xl lg:text-2xl">{{
          companyName
        }}</strong>
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
          <p>{{ times }}, Андрей!</p>
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
          <p>{{ times }}, Андрей!</p>
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
      <button v-if="companyName" class="btn letter__btn" @click="postLetter">
        Отправить
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { newPresent } from "../../utils/presentMap";
import { newTitle } from "../../utils/titleMap";
import { textareaName } from "../../utils/textareaMap";

export default {
  props: {
    myName: String,
  },

  data() {
    return {};
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const companyName = computed(() => store.getters.companyName);
    const companyPhone = computed(() => store.getters.companyPhone);
    const aboutUs = computed(() => store.getters.aboutUs);
    const present = computed(() => store.getters.present);
    const title = computed(() => store.getters.target);

    const date = new Date().getHours();
    const times =
      date < 17 ? "Добрый день" : date < 22 ? "Добрый вечер" : "Доброй ночи";

    return {
      router,
      store,
      companyName,
      companyPhone,
      aboutUs,
      present,
      title,
      newPresent,
      newTitle,
      textareaName,
      times,
    };
  },

  methods: {
    async postLetter() {
      await this.store.dispatch("postLetter", this.companyName);
      this.store.commit("clearForm");
      this.router.push("/applications");
    },
  },
};
</script>
