<template>
  <div class="login">
    <h1 class="login__title">{{ $t('signIn') }}</h1>

    <form @submit.prevent="submitForm" class="login__form">
      <input-el
        class="login__field"
        placeholder="Email"
        v-model="$v.form.email.$model"
        :validation="$v.form.email"
      />
      <input-el
        v-model="$v.form.password.$model"
        :validation="$v.form.password"
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
import { required, email, minLength } from 'vuelidate/lib/validators'
import validateForm from '@/mixins/validateForm.js'

export default {
  name: 'login',
  mixins: [validateForm],
  middleware: 'guest',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    ...mapActions(['loginUser']),
    submitForm() {
      this.validateForm().then(() => {
        this.loginUser(this.form)
      })
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
