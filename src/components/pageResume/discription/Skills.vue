<template>
  <div class="title skill__title" @click="isOpen = !isOpen">
    {{ skillsArr.title.toUpperCase() }}
  </div>
  <transition name="fade">
    <div class="content" v-if="isOpen">
      <div>
        <ul class="items">
          <li>{{ skillsArr.skill }}</li>
          <li>{{ skillsArr.skill2 }}</li>
          <li>{{ skillsArr.skill3 }}</li>
          <li>{{ skillsArr.skill4 }}</li>
          <li>{{ skillsArr.skill5 }}</li>
          <li>{{ skillsArr.skill6 }}</li>
          <li>{{ skillsArr.skill7 }}</li>
        </ul>
      </div>

      <div>
        <ul class="items">
          <li>
            <strong>{{ skillsArr.university }}</strong>
          </li>
          <li>{{ skillsArr.faculty }}</li>
          <li>{{ skillsArr.specialization }}</li>
          <li>{{ skillsArr.yearOfEnding }}</li>
        </ul>
      </div>

      <div>
        <ul class="items">
          <li>
            <strong>{{ skillsArr.company }}</strong>
          </li>
          <li>{{ skillsArr.position }}</li>
          <li>{{ skillsArr.yearsOfWork }}</li>
          <br />
          <li>
            <strong>{{ skillsArr.company2 }}</strong>
          </li>
          <li>{{ skillsArr.position2 }}</li>
          <li>{{ skillsArr.yearsOfWork2 }}</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["skillsArr"],
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
    };
  },
};
</script>
