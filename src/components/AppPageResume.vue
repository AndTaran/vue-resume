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
