<template>
  <div
    class="title skill__title w-full text-center sm:w-2/3 sm:text-left text-xs md:text-sm xl:text-xl"
    @click="isOpen = !isOpen"
  >
    {{ arr.title.toUpperCase() }}
  </div>
  <transition name="fade">
    <div class="content" v-if="isOpen">
      <div>
        <ul
          class="items text-center sm:text-left text-sm md:text-lg xl:text-xl"
        >
          <li>{{ arr.skill }}</li>
          <li>{{ arr.skill2 }}</li>
          <li>{{ arr.skill3 }}</li>
          <li>{{ arr.skill4 }}</li>
          <li>{{ arr.skill5 }}</li>
          <li>{{ arr.skill6 }}</li>
          <li>{{ arr.skill7 }}</li>
          <li>{{ arr.skill8 }}</li>
        </ul>
      </div>

      <div>
        <ul
          class="items text-center sm:text-left text-sm md:text-lg xl:text-xl"
        >
          <li>
            <strong>{{ arr.university }}</strong>
          </li>
          <li>{{ arr.faculty }}</li>
          <li>{{ arr.specialization }}</li>
          <li>{{ arr.yearOfEnding }}</li>
        </ul>
      </div>

      <div>
        <ul
          class="items text-center sm:text-left text-sm md:text-lg xl:text-xl"
        >
          <li>
            <strong>{{ arr.company }}</strong>
          </li>
          <li>{{ arr.position }}</li>
          <li>{{ arr.yearsOfWork }}</li>
          <br />
          <li>
            <strong>{{ arr.company2 }}</strong>
          </li>
          <li>{{ arr.position2 }}</li>
          <li>{{ arr.yearsOfWork2 }}</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["arr"],
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
    };
  },
};
</script>
