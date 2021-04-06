<template>
  <div class="container">
    <div class="blocks">
      <div class="blocks__left">
        <about-me></about-me>
      </div>
      <div class="blocks__right">
        <my-description
          surname="Тараненко"
          name="Андрей"
          job="Junior Frontend разработчик"
        ></my-description>
      </div>
    </div>
  </div>
</template>

<script>
import AboutMe from "./pageResume/information/AboutMe";
import MyDescription from "./pageResume/discription/MyDescription";

export default {
  components: { AboutMe, MyDescription },
};
</script>

<style lang="scss">
.container {
  overflow: auto;
  max-width: 1280px;
  min-height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
  .blocks {
    display: flex;
    justify-content: space-between;
    &__left {
      width: 30%;
      background-color: rgb(36, 106, 111);
      padding-top: 80px;
    }
    &__right {
      width: 70%;
      background-color: rgb(220, 220, 220);
      padding-top: 80px;
    }
  }
}
</style>
