<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="letter__title py-4 text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Редактировать резюме
      </h2>
      <form class="form edit">
        <div>
          <div class="form-control edit__form">
            <h3>Контактные данные</h3>
            <div class="edit__row">
              <label for="name">Имя</label>
              <input type="text" id="name" />
            </div>
            <div class="edit__row">
              <label for="surname">Фамилия</label>
              <input type="text" id="surname" />
            </div>
            <div class="edit__row">
              <label for="position">Должность</label>
              <input type="text" id="position" />
            </div>
            <br />
            <div class="edit__row">
              <label for="phone">Мобильный телефон</label>
              <input type="tel" id="phone" />
            </div>
            <div class="edit__row">
              <label for="email">Эл. почта</label>
              <input type="email" id="email" />
            </div>
          </div>
        </div>
        <div>
          <div class="form-control edit__form">
            <h3>Образование</h3>
            <div class="edit__row">
              <label for="education">Учебное заведение</label>
              <input type="text" id="education" />
            </div>
            <div class="edit__row">
              <label for="education">Факультет</label>
              <input type="text" id="education" />
            </div>
            <div class="edit__row">
              <label for="education">Специализация</label>
              <input type="text" id="education" />
            </div>
            <div class="edit__row">
              <label for="education">Год окончания</label>
              <input type="date" id="education" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.edit {
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  &__form {
    width: 400px;
  }
  &__form input {
    padding: 0;
    width: 60%;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
  }
}
</style>
