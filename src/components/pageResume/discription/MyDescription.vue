<template>
  <div class="container">
    <div class="fio">{{ surname }}</div>
    <div class="fio">{{ name }}</div>
    <div class="job">{{ job }}</div>
    <skills v-for="s in skillsArr" :key="s.title" :skillsArr="s" />
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
        skill4: "JavaScipt",
        skill5: "Vue",
        skill6: "GIT",
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

<style lang="scss" scoped>
.fio {
  color: rgb(36, 106, 111);
  font-size: 60px;
  letter-spacing: 2px;
  font-weight: 700;
}
.job {
  color: rgb(36, 106, 111);
  font-size: 30px;
  letter-spacing: 2px;
  font-weight: 500;
  margin: 50px 0px;
}
</style>
