<template>
  <div
    class="title w-full text-center text-xs sm:w-3/4 sm:text-left md:text-sm xl:text-xl"
    @click="isOpen = !isOpen"
  >
    {{ contact.title.toUpperCase() }}
  </div>

  <transition-group name="fade">
    <div class="content" v-if="isOpen">
      <div class="phone text-center text-sm sm:text-left xl:text-xl">
        {{ contact.phone }}
      </div>

      <div class="email text-center text-sm sm:text-left xl:text-xl">
        {{ contact.email }}
      </div>
      <p class="text text-sm xl:text-xl">{{ contact.text }}</p>
    </div>
  </transition-group>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["contact"],

  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
    };
  },
};
</script>
