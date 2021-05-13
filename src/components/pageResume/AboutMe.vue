<template>
  <div class="container">
    <div class="column">
      <div class="contacts__img mb-11 hidden sm:inline-block">
        <img src="../../assets/logo.png" alt="" />
      </div>

      <ul v-for="i in arr" :key="i.title">
        <li>
          <descr-btn :title="i.title" :elements="i.descr" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DescrBtn from "./DescrBtn";

export default {
  props: {
    arr: {
      type: Array,
      required: true,
    },
  },
  components: { DescrBtn },
};
</script>
