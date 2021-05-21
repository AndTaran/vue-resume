<template>
  <div class="container">
    <div class="blocks flex-col sm:flex-row">
      <div class="blocks__left pt-10 sm:pt-32 sm:pb-32 w-full sm:w-2/5">
        <invite-form
          title="Добро пожаловать"
          subtitle="Заполните, пожалуйста, форму"
        ></invite-form>
      </div>
      <div class="blocks__right sm:pt-32 sm:pb-32 w-full sm:w-3/5">
        <invite-letter myName="Андрей"></invite-letter>
      </div>
    </div>
  </div>
</template>

<script>
import InviteForm from "../components/pageInvite/InviteForm";
import InviteLetter from "../components/pageInvite/InviteLetter";

export default {
  components: { InviteForm, InviteLetter },
};
</script>
