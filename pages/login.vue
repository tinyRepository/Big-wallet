<template>
  <div class="login">
    <h1 class="login__title">{{ $t('signIn') }}</h1>

    <form @submit.prevent="submitForm" class="login__form">
      <input-el v-model="form.email" class="login__field" placeholder="Email" />
      <input-el
        v-model="form.password"
        type="password"
        class="login__field"
        :placeholder="$t('password')"
      />
      <button-auth class="login__button">{{ $t('enter') }}</button-auth>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  middleware: 'guest',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    submitForm() {
      this.loginUser(this.form)
    },
  },
}
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 69px;

  &__title {
    @include font(18px, $white-color, bold);
    line-height: 21px;
    margin-bottom: 39px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    max-width: 245px;
  }

  &__field {
    width: 245px;
    margin-bottom: 16px;
  }

  &__button {
    margin-top: 13px;
  }
}
</style>
