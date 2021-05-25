<template>
  <div class="edit__items">
    <div class="form-control edit__item">
      <h3 class="edit__title">{{ title }}</h3>
      <div class="edit__row">
        <label for="institution">Учебное заведение</label>
        <input
          type="text"
          id="institution"
          :value="institution"
          @input="$emit('update:institution', $event.target.value)"
        />
      </div>
      <div class="edit__row">
        <label for="faculty">Факультет</label>
        <input
          type="text"
          id="faculty"
          :value="faculty"
          @input="$emit('update:faculty', $event.target.value)"
        />
      </div>
      <div class="edit__row">
        <label for="specialization">Специализация</label>
        <input
          type="text"
          id="specialization"
          :value="specialization"
          @input="$emit('update:specialization', $event.target.value)"
        />
      </div>
      <div class="edit__row">
        <label for="yearOfEnding">Год окончания</label>
        <input
          type="number"
          id="yearOfEnding"
          :value="yearOfEnding"
          @input="$emit('update:yearOfEnding', $event.target.value)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    institution: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    yearOfEnding: {
      type: String,
      required: true,
    },
  },
};
</script>
