<template>
  <div class="edit__items">
    <div class="form-control edit__item">
      <h3 class="edit__title">{{ title }}</h3>
      <div class="edit__row">
        <label for="skill">Навыки</label>
        <input type="text" id="skill" v-model="skill" />
      </div>
      <button
        :disabled="skill == null"
        class="btn letter__btn"
        @click.prevent="addSkill"
      >
        Добавить
      </button>
      <ul class="skill-items" v-for="(s, idx) in arr" :key="idx">
        <li class="skill-btn">{{ idx + 1 }}: {{ s }}</li>
        <button class="skill-btn warning" @click="removeSkill(idx)">
          Удалить
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    title: String,
    arr: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      skill: ref(null),
    };
  },
  methods: {
    addSkill() {
      this.$props.arr.push(this.skill);
      this.skill = null;
    },
    removeSkill(id) {
      this.$props.arr.splice(id, 1);
    },
  },
};
</script>

<style></style>
