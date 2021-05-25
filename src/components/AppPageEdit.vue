<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="letter__title py-4 text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Редактировать резюме
      </h2>
      <form class="form edit text-xs sm:text-sm">
        <edit-about-me
          title="Контактные данные"
          v-model:name="generalInfo.personName"
          v-model:surname="generalInfo.surname"
          v-model:vacancy="generalInfo.vacancy"
          v-model:phone="phone"
          v-model:email="email"
        />

        <edit-education
          :title="education.title"
          v-model:institution="institution"
          v-model:faculty="faculty"
          v-model:specialization="specialization"
          v-model:yearOfEnding="yearOfEnding"
        />

        <edit-work
          :title="workExperience.title"
          v-model:organization="organization"
          v-model:position="position"
          v-model:beginningOfWork="beginningOfWork"
          v-model:ending="ending"
        />

        <edit-textarea :title="aboutMe.title" v-model:aboutMe="meInfo" />

        <edit-skills :title="skills.title" :arr="skills.descr" />

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
import EditAboutMe from "./pageEdit/EditAboutMe";
import EditEducation from "./pageEdit/EditEducation";
import EditWork from "./pageEdit/EditWork";
import EditTextarea from "./pageEdit/EditTextarea";
import EditSkills from "./pageEdit/EditSkills";
import { useVuelidate } from "@vuelidate/core";

export default {
  components: {
    EditAboutMe,
    EditEducation,
    EditWork,
    EditTextarea,
    EditSkills,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    return {
      v$: useVuelidate(),
      store,
      router,
      beginningOfWork: ref(""),
      ending: ref(""),

      generalInfo: ref({
        personName: "",
        surname: "",
        vacancy: "",
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

      institution: ref(""),
      faculty: ref(""),
      specialization: ref(""),
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

  methods: {
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
