<template>
  <div class="edit__items">
    <div class="form-control edit__item">
      <h3 class="edit__title">{{ title }}</h3>
      <div class="edit__row">
        <textarea
          name="aboutMe"
          id=""
          cols="5"
          rows="5"
          :value="aboutMe"
          @input="$emit('update:aboutMe', $event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    aboutMe: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
