<template>
  <nav class="nav text-sm lg:text-base xl:text-lg">
    <div class="nav__title">{{ title.toUpperCase() }}</div>
    <div class="hidden sm:block">
      <div class="dropdown">
        <div class="link-row">
          <router-link class="nav__link" to="/">Резюме </router-link>
          <img
            class="link-img"
            src="https://golfclub-sellshop.com/wp-content/uploads/2017/07/yajirusi-sita.png"
            alt=""
          />
        </div>
        <div class="dropdown-content">
          <router-link to="/edit">Редактировать</router-link>
        </div>
      </div>
      <router-link class="nav__link" to="/invite">Пригласить</router-link>
      <router-link class="nav__link" to="/application">Заявки</router-link>
    </div>

    <div class="burger block sm:hidden">
      <div class="burger__btn" @click="open = !open">
        <span></span>
      </div>
      <transition name="fade">
        <div class="burger__menu flex flex-col bg-black" v-if="open">
          <router-link class="nav__link menu__link" to="/">Резюме</router-link>
          <router-link class="nav__link menu__link" to="/invite"
            >Пригласить</router-link
          >
          <router-link class="nav__link menu__link" to="/applications"
            >Заявки</router-link
          >
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    title: String,
  },
  setup() {
    const store = useStore();
    const open = ref(false);

    const localCompanyName = computed({
      get: () => store.getters.localCompanyName,
      set: (value) => store.commit("setLocalCompanyName", value),
    });

    return { localCompanyName, open };
  },
};
</script>
<style lang="scss">
.link-row {
  display: flex;
  align-items: center;
}
.link-img {
  width: 12px;
  height: 12px;
  margin-left: -8px;
}
.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  color: white;
  border: none;
  outline: none;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
