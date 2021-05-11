<template>
  <div class="container">
    <div class="column">
      <div class="contacts__img mb-11 hidden sm:inline-block">
        <img src="../../assets/logo.png" alt="" />
      </div>

      <ul v-for="i in arr" :key="i.title">
        <li>
          <descr-btn :title="i.title" :elements="i.descr" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DescrBtn from "./DescrBtn";

export default {
  setup() {
    const arr = [
      {
        title: "Контакты",
        descr: ["+7(918)29-69-201", "and_taranenko@mail.ru"],
      },
      {
        title: "О себе",
        descr: [
          "- Внимание к деталям;\n- Умение работать в команде;\n- Имею хорошие способности к самообучению и саморазвитию;\n- Большое желание и готовность развиваться в сфере IT.",
        ],
      },
    ];
    return { arr };
  },
  components: { DescrBtn },
};
</script>
