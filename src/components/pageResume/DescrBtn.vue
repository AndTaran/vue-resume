<template>
  <div
    class="title w-full text-center text-xs sm:w-3/4 sm:text-left md:text-sm xl:text-xl"
    :class="className"
    @click="isOpen = !isOpen"
  >
    {{ title }}
  </div>

  <transition-group name="fade">
    <div class="content" v-if="isOpen">
      <ul v-for="e in elements" :key="e">
        <li class="text text-center text-sm sm:text-left xl:text-xl">
          {{ e }}
        </li>
      </ul>
    </div>
  </transition-group>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    elements: {
      type: Array,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
  },

  setup() {
    return {
      isOpen: ref(false),
    };
  },
};
</script>
