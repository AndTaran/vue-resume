<template>
  <div class="container">
    <div class="blocks flex-col sm:flex-row">
      <div class="blocks__left pt-10 sm:pt-32 sm:pb-32 w-full sm:w-2/5">
        <invitation-form
          title="Добро пожаловать"
          subtitle="Заполните, пожалуйста, форму"
        ></invitation-form>
      </div>
      <div class="blocks__right sm:pt-32 sm:pb-32 w-full sm:w-3/5">
        <invitation-letter myName="Андрей"></invitation-letter>
      </div>
    </div>
  </div>
</template>

<script>
import invitationForm from "../components/pageInvite/invitationForm";
import invitationLetter from "../components/pageInvite/invitationLetter";

export default {
  components: { invitationForm, invitationLetter },
};
</script>
