<template>
  <Navbar title="Pезюме " />
  <app-page-resume></app-page-resume>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/ui/Navbar";
import AppPageResume from "@/components/AppPageResume";

export default {
  name: "Home",
  components: {
    Navbar,
    AppPageResume,
  },
};
</script>
