<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="letter__title text-lg">
        Данный раздел находится в разработке!
      </h2>
      <h2 class="letter__title py-4 text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Редактировать резюме
      </h2>
      <form class="form edit text-xs sm:text-sm">
        <div class="edit__items">
          <div class="form-control edit__item">
            <h3 class="edit__title">Контактные данные</h3>
            <div class="edit__row">
              <label for="name">Имя</label>
              <input
                type="text"
                id="name"
                :class="{ invalid: v$.generalInfo.personName.$error }"
                v-model="v$.generalInfo.personName.$model"
                @blur="v$.generalInfo.personName.$touch"
              />
            </div>
            <small class="text-right" v-if="v$.generalInfo.personName.$error"
              >Обязательно для заполнения</small
            >

            <div class="edit__row">
              <label for="surname">Фамилия</label>
              <input
                :class="{ invalid: v$.generalInfo.surname.$error }"
                type="text"
                id="surname"
                v-model="v$.generalInfo.surname.$model"
                @blur="v$.generalInfo.surname.$touch"
              />
            </div>
            <small class="text-right" v-if="v$.generalInfo.surname.$error"
              >Обязательно для заполнения</small
            >

            <div class="edit__row">
              <label for="vacancy">Должность</label>
              <input
                :class="{ invalid: v$.generalInfo.vacancy.$error }"
                type="text"
                id="vacancy"
                v-model="v$.generalInfo.vacancy.$model"
                @blur="v$.generalInfo.vacancy.$touch"
              />
            </div>
            <small class="text-right" v-if="v$.generalInfo.vacancy.$error"
              >Обязательно для заполнения</small
            >

            <br />
            <div class="edit__row">
              <label for="phone">Tелефон</label>
              <input
                :class="{ invalid: v$.generalInfo.phone.$error }"
                type="tel"
                id="phone"
                v-model="v$.generalInfo.phone.$model"
                @blur="v$.generalInfo.phone.$touch"
              />
            </div>
            <small class="text-right" v-if="v$.generalInfo.phone.$error"
              >Мин. 11 цифр</small
            >

            <div class="edit__row">
              <label for="email">Эл. почта</label>
              <input
                :class="{ invalid: v$.generalInfo.email.$error }"
                type="email"
                id="email"
                v-model="v$.generalInfo.email.$model"
                @blur="v$.generalInfo.email.$touch"
              />
            </div>
            <small class="text-right" v-if="v$.generalInfo.email.$error"
              >Обязательно для заполнения</small
            >
          </div>
        </div>

        <div class="edit__items">
          <div class="form-control edit__item">
            <h3 class="edit__title">Образование</h3>
            <div class="edit__row">
              <label for="institution">Учебное заведение</label>
              <input type="text" id="institution" v-model="institution" />
            </div>
            <div class="edit__row">
              <label for="faculty">Факультет</label>
              <input type="text" id="faculty" v-model="faculty" />
            </div>
            <div class="edit__row">
              <label for="specialization">Специализация</label>
              <input type="text" id="specialization" v-model="specialization" />
            </div>
            <div class="edit__row">
              <label for="yearOfEnding">Год окончания</label>
              <input type="number" id="yearOfEnding" v-model="yearOfEnding" />
            </div>
          </div>
        </div>

        <div class="edit__items">
          <div class="form-control edit__item">
            <h3 class="edit__title">Опыт работы</h3>
            <div class="edit__row">
              <label for="organization">Организация</label>
              <input type="text" id="organization" v-model="organization" />
            </div>
            <div class="edit__row">
              <label for="position">Должность</label>
              <input type="text" id="position" v-model="position" />
            </div>
            <div class="edit__row">
              <label for="beginningOfWork">Начало работы</label>
              <input
                type="month"
                id="beginningOfWork"
                v-model="beginningOfWork"
              />
            </div>
            <div class="edit__row">
              <label for="ending">Окончание</label>
              <input type="month" id="ending" v-model="ending" />
            </div>
          </div>
        </div>

        <div class="edit__items">
          <div class="form-control edit__item">
            <h3 class="edit__title">О себе</h3>
            <div class="edit__row">
              <textarea
                name="aboutMe"
                id=""
                cols="5"
                rows="5"
                v-model="meInfo"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="edit__items">
          <div class="form-control edit__item">
            <h3 class="edit__title">Навыки</h3>
            <div class="edit__row">
              <label for="skills">Навыки</label>
              <input type="text" id="skills" v-model="skill" />
            </div>
            <button class="btn letter__btn" @click.prevent="addSkill">
              Добавить
            </button>
            <ul class="skill-items" v-for="(s, idx) in skills.descr" :key="idx">
              <li class="skill-btn">
                {{ s }}
              </li>
              <button class="skill-btn warning" @click="removeSkill(idx)">
                Удалить
              </button>
            </ul>
          </div>
        </div>

        <button class="btn" type="submit" @click.prevent="pushFormEdit">
          Сохранить
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    return {
      store,
      router,
      v$: useVuelidate(),
      beginningOfWork: ref(""),
      ending: ref(""),

      generalInfo: ref({
        personName: null,
        surname: null,
        vacancy: null,
      }),

      phone: ref(""),
      email: ref(""),
      contacts: ref({
        title: "Контакты",
        descr: [],
      }),

      meInfo: ref(""),
      aboutMe: ref({
        title: "О себе",
        descr: [],
      }),

      skill: ref(""),
      skills: ref({
        title: "Навыки",
        descr: [],
      }),

      institution: ref(""),
      faculty: ref(""),
      specialization: ref(),
      yearOfEnding: ref(""),
      education: ref({
        title: "Образование",
        descr: [],
      }),

      organization: ref(""),
      position: ref(""),
      startEndWork: ref(""),
      workExperience: ref({
        title: "Опыт работы",
        descr: [],
      }),
    };
  },
  validations() {
    return {
      generalInfo: {
        personName: {
          required,
          minLength: minLength(3),
        },
        surname: {
          required,
          minLength: minLength(3),
        },
        vacancy: {
          required,
        },
        phone: {
          required,
          minLength: minLength(11),
        },
        email: {
          required,
        },
      },
    };
  },
  methods: {
    addSkill() {
      this.skills.descr.push(this.skill);
      this.skill = null;
    },
    removeSkill(id) {
      this.skills.descr.splice(id, 1);
    },

    async pushFormEdit() {
      this.v$.$touch();

      if (this.v$.$invalid) {
        alert("Пожалуйста, заполните все обязательные поля!");
      } else {
        await this.store.commit("edit/clearArray");
        await this.store.commit("edit/updateArrGeneral", this.generalInfo);

        this.contacts.descr.push(this.phone, this.email);
        this.aboutMe.descr.push(this.meInfo);

        await this.store.commit("edit/updateArrContacts", {
          contact: this.contacts,
          aboutMe: this.aboutMe,
        });

        this.education.descr.push(
          this.institution,
          `Факультет: ${this.faculty}
        Специальность: ${this.specialization}
        Год окончания: ${this.yearOfEnding}`
        );

        this.startEndWork = `${this.beginningOfWork} по ${this.ending}`;
        this.workExperience.descr.push(
          this.organization,
          this.position,
          this.startEndWork
        );
        this.store.commit("edit/updateArrProfessional", {
          skills: this.skills,
          education: this.education,
          workExperience: this.workExperience,
        });

        setTimeout(() => {
          this.router.push("/");
        }, 500);
      }
    },
  },
};
</script>
