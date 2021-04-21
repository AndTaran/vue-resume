<template>
  <div class="container">
    <div class="blocks">
      <div class="blocks__left">
        <invitation-form
          title="Добро пожаловать"
          subtitle="Заполните, пожалуйста, форму"
        ></invitation-form>
      </div>
      <div class="blocks__right">
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
