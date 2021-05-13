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
              <input type="text" id="name" v-model="generalInfo.personName" />
            </div>

            <div class="edit__row">
              <label for="surname">Фамилия</label>
              <input type="text" id="surname" v-model="generalInfo.surname" />
            </div>
            <div class="edit__row">
              <label for="vacancy">Должность</label>
              <input type="text" id="vacancy" v-model="generalInfo.vacancy" />
            </div>
            <br />
            <div class="edit__row">
              <label for="phone">Tелефон</label>
              <input type="tel" id="phone" v-model="phone" />
            </div>
            <div class="edit__row">
              <label for="email">Эл. почта</label>
              <input type="email" id="email" v-model="email" />
            </div>
          </div>
        </div>

        <div class="edit__items">
          <div class="form-control edit__item">
            <h3 class="edit__title">Образование</h3>
            <div class="edit__row">
              <label for="institution">Учебное заведение</label>
              <input type="text" id="institution" />
            </div>
            <div class="edit__row">
              <label for="faculty">Факультет</label>
              <input type="text" id="faculty" />
            </div>
            <div class="edit__row">
              <label for="specialization">Специализация</label>
              <input type="text" id="specialization" />
            </div>
            <div class="edit__row">
              <label for="yearOfEnding">Год окончания</label>
              <input type="number" id="yearOfEnding" />
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

        <button
          class="btn"
          type="submit"
          @click.prevent="pushFormEdit(personName)"
        >
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

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const beginningOfWork = ref("");
    const ending = ref("");

    return {
      store,
      router,
      beginningOfWork,
      ending,

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

      skills: ref({
        title: "Навыки",
        descr: [],
      }),

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
  methods: {
    async pushFormEdit() {
      await this.store.commit("edit/clearArray");
      await this.store.commit("edit/updateArrGeneral", this.generalInfo);

      await this.contacts.descr.push(this.phone, this.email);
      await this.aboutMe.descr.push(this.meInfo);

      this.store.commit("edit/updateArrContacts", {
        contact: this.contacts,
        aboutMe: this.aboutMe,
      });

      this.startEndWork = `${this.beginningOfWork} - ${this.ending}`;
      await this.workExperience.descr.push(
        this.organization,
        this.position,
        this.date
      );
      this.store.commit("edit/updateArrProfessional", this.workExperience);

      setTimeout(() => {
        this.router.push("/");
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.edit {
  font-family: "Spectral SC", serif;
  padding: 0;
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  &__items {
    background-color: #fff;
    color: black;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid black;
    border-radius: 5px;
    letter-spacing: 1px;
    cursor: pointer;
  }
  &__item {
    width: 450px;
    margin: 0;
  }
  &__item input {
    padding: 0;
    width: 60%;
    resize: none;
  }
  &__title {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 20px;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
  }
}
</style>
