<template>
  <div class="title" @click="isOpen = !isOpen">
    {{ contact.title.toUpperCase() }}
  </div>
  <transition name="fade">
    <div class="content" v-if="isOpen">
      <div class="phone">{{ contact.phone }}</div>
      <div class="email">{{ contact.email }}</div>
      <div class="text">{{ contact.text }}</div>
    </div>
  </transition>
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
