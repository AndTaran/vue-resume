<template>
  <div class="container">
    <div class="mb-14 lg:mb-20 xl:mb-14">
      <div class="fio text-2xl sm:text-5xl xl:text-6xl">{{ surname }}</div>
      <div class="fio text-2xl md:text-5xl xl:text-6xl">{{ name }}</div>
      <div class="job mt-16 text-lg md:text-2xl lg:text-3xl xl:text-4xl">
        {{ job }}
      </div>
    </div>
    <ul v-for="i in arr" :key="i.title">
      <li>
        <descr-btn
          :title="i.title"
          :elements="i.descr"
          className="skill__title"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import DescrBtn from "./DescrBtn";

export default {
  props: {
    name: String,
    surname: String,
    job: String,
  },
  setup() {
    const arr = [
      {
        title: "Навыки",
        descr: [
          "HTML",
          "CSS",
          "SCSS",
          "JavaScript",
          "Vue",
          "Vuex",
          "Axios",
          "GIT",
        ],
      },
      {
        title: "Образование",
        descr: [
          "Кубанский государственный аграрный университет",
          "Факультет: экономический",
          "Специальность: экономика предприятий",
          "Год окончания: 2016",
        ],
      },
      {
        title: "Опыт работы",
        descr: [
          "НЕВА, Холдинг Безопасности",
          "Менеджер по продажам",
          "Ноябрь 2016 - Июль 2020",
          "\nТерминал, Строительный комплекс ",
          "Менеджер по закупкам",
          "Декабрь 2020 - Апрель 2021",
        ],
      },
    ];
    return { arr };
  },
  components: { DescrBtn },
};
</script>
