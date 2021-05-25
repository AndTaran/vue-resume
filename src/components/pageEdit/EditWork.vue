<template>
  <div class="edit__items">
    <div class="form-control edit__item">
      <h3 class="edit__title">{{ title }}</h3>
      <div class="edit__row">
        <label for="organization">Организация</label>
        <input
          type="text"
          id="organization"
          :value="organization"
          @input="$emit('update:organization', $event.target.value)"
        />
      </div>
      <div class="edit__row">
        <label for="position">Должность</label>
        <input
          type="text"
          id="position"
          :value="position"
          @input="$emit('update:position', $event.target.value)"
        />
      </div>
      <div class="edit__row">
        <label for="beginningOfWork">Начало работы</label>
        <input
          type="month"
          id="beginningOfWork"
          :value="beginningOfWork"
          @input="$emit('update:beginningOfWork', $event.target.value)"
        />
      </div>
      <div class="edit__row">
        <label for="ending">Окончание</label>
        <input
          type="month"
          id="ending"
          :value="ending"
          @input="$emit('update:ending', $event.target.value)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    organization: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    beginningOfWork: {
      type: String,
      required: true,
    },
    ending: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
