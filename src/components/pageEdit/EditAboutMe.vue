<template>
  <div class="edit__items">
    <div class="form-control edit__item">
      <h3 class="edit__title">{{ title }}</h3>
      <div class="edit__row">
        <label for="name">Имя*</label>
        <input
          :class="{ invalid: v$.name.$error }"
          type="text"
          id="name"
          :value="v$.name.$model"
          @input="$emit('update:name', $event.target.value)"
          @blur="v$.name.$touch"
        />
      </div>
      <small class="text-right" v-if="v$.name.$error"
        >Обязательно для заполнения</small
      >

      <div class="edit__row">
        <label for="surname">Фамилия*</label>
        <input
          :class="{ invalid: v$.surname.$error }"
          type="text"
          id="surname"
          :value="v$.surname.$model"
          @input="$emit('update:surname', $event.target.value)"
          @blur="v$.surname.$touch"
        />
      </div>
      <small class="text-right" v-if="v$.surname.$error"
        >Обязательно для заполнения</small
      >

      <div class="edit__row">
        <label for="vacancy">Должность</label>
        <input
          :class="{ invalid: v$.vacancy.$error }"
          type="text"
          id="vacancy"
          :value="v$.vacancy.$model"
          @input="$emit('update:vacancy', $event.target.value)"
          @blur="v$.vacancy.$touch"
        />
      </div>
      <small class="text-right" v-if="v$.vacancy.$error"
        >Обязательно для заполнения</small
      >

      <div class="edit__row">
        <label for="phone">Телефон*</label>
        <input
          :class="{ invalid: v$.phone.$error }"
          type="tel"
          id="phone"
          :value="v$.phone.$model"
          @input="$emit('update:phone', $event.target.value)"
          @blur="v$.phone.$touch"
        />
      </div>
      <small class="text-right" v-if="v$.phone.$error">Минимум 11 цифр</small>

      <div class="edit__row">
        <label for="email">Эл. почта*</label>
        <input
          :class="{ invalid: v$.email.$error }"
          type="email"
          id="inputValFive"
          :value="v$.email.$model"
          @input="$emit('update:email', $event.target.value)"
          @blur="v$.email.$touch"
        />
      </div>
      <small class="text-right" v-if="v$.email.$error"
        >Введите корректный email</small
      >
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, numeric } from "@vuelidate/validators";

export default {
  props: {
    title: String,
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },

    vacancy: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      name: {
        required,
      },
      surname: {
        required,
      },
      vacancy: {
        required,
      },
      phone: {
        required,
        numeric,
      },
      email: {
        required,
        email,
      },
    };
  },
};
</script>
