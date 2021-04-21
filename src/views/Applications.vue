<template>
  <Navbar title="Заявка" />
  <app-page-request title="Ваша заявка" />
</template>

<script>
import AppPageRequest from "../components/AppPageRequest";
import Navbar from "../components/ui/Navbar";

export default {
  components: { Navbar, AppPageRequest },
};
</script>
