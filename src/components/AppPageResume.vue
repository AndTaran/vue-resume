<template>
  <div class="container">
    <div class="blocks flex-col-reverse sm:flex-row">
      <div class="blocks__left pt-4 sm:pt-32 sm:pb-32 w-full sm:w-2/5">
        <about-me></about-me>
      </div>
      <div class="blocks__right pt-10 sm:pt-32 sm:pb-32 w-full sm:w-3/5">
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
import AboutMe from "./pageResume/AboutMe";
import MyDescription from "./pageResume/MyDescription";

export default {
  components: { AboutMe, MyDescription },
};
</script>
