<template>
  <div class="registration">
    <h1 class="registration__title">Регистрация</h1>
    <form @submit.prevent="submitForm" class="registration__form">
      <input-el
        v-model="form.name"
        class="registration__field"
        placeholder="Имя"
      />
      <input-el
        v-model="form.email"
        class="registration__field"
        placeholder="Email"
      />
      <input-el
        v-model="form.password"
        type="password"
        class="registration__field"
        placeholder="Пароль"
      />
      <button-auth class="registration__button">Зарегистрироваться</button-auth>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import InputEl from '../components/InputEl'
import ButtonAuth from '../components/ButtonAuth'

export default {
  components: { InputEl, ButtonAuth },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    ...mapActions(['registrationUser']),
    submitForm() {
      this.registrationUser(this.form)
    },
  },
}
</script>

<style lang="scss">
.registration {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 74px;

  &__form {
    max-width: 245px;
  }

  &__field {
    width: 245px;
    margin-bottom: 16px;
  }

  &__title {
    @include font(18px, $white-color, bold);
    line-height: 21px;
    margin-bottom: 39px;
  }

  &__button {
    margin-top: 13px;
  }
}
</style>
