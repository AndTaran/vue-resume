<template>
  <div class="container">
    <div class="mb-14 lg:mb-20 xl:mb-14">
      <div class="fio text-2xl sm:text-5xl xl:text-6xl">{{ surname }}</div>
      <div class="fio text-2xl md:text-5xl xl:text-6xl">{{ name }}</div>
      <div class="job mt-16 text-lg md:text-2xl lg:text-3xl xl:text-4xl">
        {{ job }}
      </div>
    </div>
    <skills v-for="s in skillsArr" :key="s.title" :arr="s" />
  </div>
</template>

<script>
import Skills from "./Skills";

export default {
  props: {
    name: String,
    surname: String,
    job: String,
  },
  setup() {
    const skillsArr = [
      {
        title: "Навыки",
        skill: "HTML",
        skill2: "CSS",
        skill3: "SCSS",
        skill4: "JavaScript",
        skill5: "Vue",
        skill6: "Vuex",
        skill7: "Axios",
        skill8: "GIT",
      },
      {
        title: "Образование",
        university: "Кубанский государственный аграрный университет",
        faculty: "Факультет: экономический",
        specialization: "Специальность: экономика предприятий",
        yearOfEnding: "Год окончания: 2016",
      },
      {
        title: "Опыт работы",
        company: "НЕВА, Холдинг Безопасности",
        position: "Менеджер по продажам",
        yearsOfWork: "2016 - 2020",
        company2: "Терминал, Строительный комплекс ",
        position2: "Менеджер по закупкам",
        yearsOfWork2: "2020 - настоящее время",
      },
    ];
    return { skillsArr };
  },
  components: { Skills },
};
</script>
