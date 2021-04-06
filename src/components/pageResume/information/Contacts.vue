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
    // const time = () => {
    //   setTimeout(() => {
    //     isOpen.value = !isOpen.value;
    //   }, 200);
    // };
    return {
      // time,
      isOpen,
    };
  },
};
</script>

<style lang="scss">
.title {
  width: 80%;
  color: black;
  background-color: rgb(221, 221, 221);
  padding: 10px;
  font-size: 20px;
  letter-spacing: 4px;
  border-radius: 5px;
  text-align: left;
  margin: 30px 0;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    background-color: rgb(194, 194, 194);
  }
}
.phone {
  color: black;
  text-align: left;
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 10px;
  cursor: pointer;
}
.email {
  color: black;
  text-align: left;
  font-size: 18px;
  letter-spacing: 2px;
  cursor: pointer;
}
.text {
  color: black;
  text-align: justify;
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 10px;
  transition: all 3s linear;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
