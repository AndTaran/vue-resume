<template>
  <div class="container">
    <div class="column">
      <div class="contacts__img">
        <img src="../../../assets/logo.png" alt="" />
      </div>
      <contacts v-for="c in contact" :key="c.title" :contact="c" />
    </div>
  </div>
</template>

<script>
import Contacts from "./Contacts";

export default {
  setup() {
    const contact = [
      {
        title: "Контакты",
        phone: "+7(918)29-69-201",
        email: "and_taranenko@mail.ru",
      },
      {
        title: "О себе",
        text:
          "Здравствуйте! Меня зовут Андрей. Ещё в университете с друзьями изучали html, css и подрабатывали на верстке сайтов. А после была необходимость найти постоянную работу.\n На данный момент уже могу осуществить свою мечту и связать свою жизнь с IT сферой. Продолжил самостоятельное обучение, изучаю javascript и фреймворк vue. \nИмею хорошие способности к самообучению и саморазвитию.",
      },
    ];
    return { contact };
  },
  components: { Contacts },
};
</script>
