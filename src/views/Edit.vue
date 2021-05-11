<template>
  <router-link to="/">
    <div class="w-auto bg-black text-white h-8">Назад</div>
  </router-link>
  <app-page-edit></app-page-edit>
</template>

<script>
import AppPageEdit from "../components/AppPageEdit";
export default {
  components: { AppPageEdit },
};
</script>
