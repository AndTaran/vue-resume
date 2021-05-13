<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="uppercase text-white text-lg">
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
              <input type="tel" id="phone" v-model="contacts.phone" />
            </div>
            <div class="edit__row">
              <label for="email">Эл. почта</label>
              <input type="email" id="email" v-model="contacts.email" />
            </div>
          </div>
        </div>

        <div class="edit__items">
          <div class="form-control edit__item">
            <h3 class="edit__title">Образование</h3>
            <div class="edit__row">
              <label for="education">Учебное заведение</label>
              <input type="text" id="education" v-model="education" />
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
              <input type="date" id="yearOfEnding" v-model="yearOfEnding" />
            </div>
          </div>
        </div>

        <div class="edit__items">
          <div class="form-control edit__item">
            <h3 class="edit__title">Опыт работы</h3>
            <div class="edit__row">
              <label for="organization">Организация</label>
              <input type="text" id="organization" />
            </div>
            <div class="edit__row">
              <label for="position">Должность</label>
              <input type="text" id="position" />
            </div>
            <div class="edit__row">
              <label for="beginningOfWork">Начало работы</label>
              <input type="date" id="beginningOfWork" />
            </div>
            <div class="edit__row">
              <label for="ending">Окончание</label>
              <input type="date" id="ending" />
            </div>
          </div>
        </div>

        <div class="edit__items">
          <div class="form-control edit__item">
            <h3 class="edit__title">О себе</h3>
            <div class="edit__row">
              <textarea name="aboutMe" id="" cols="5" rows="5"></textarea>
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

    return {
      store,
      router,
      generalInfo: ref({
        personName: null,
        surname: null,
        vacancy: null,
      }),

      contacts: ref({
        phone: null,
        email: null,
      }),

      education: ref(""),
      faculty: ref(""),
      specialization: ref(""),
      yearOfEnding: ref(""),
    };
  },
  methods: {
    async pushFormEdit() {
      await this.store.commit("edit/clearArray");
      await this.store.commit("edit/updateArrGeneral", this.generalInfo);

      setTimeout(() => {
        this.router.push("/");
      }, 500);
      // this.store.commit("edit/updateArrProfessional", arrForm);
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
