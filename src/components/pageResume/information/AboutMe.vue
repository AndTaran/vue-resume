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
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sequi. Voluptate mollitia harum eum necessitatibus voluptates, sapiente error totam tenetur earum quas reiciendis doloremque unde quos non commodi quidem in?",
      },
    ];
    return { contact };
  },
  components: { Contacts },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px 20px 0px;
}
.contacts {
  margin: 20px 0;

  &__img {
    margin-bottom: 50px;
  }
}
</style>
