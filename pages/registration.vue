<template>
  <div class="registration">
    <h1 class="registration__title">{{ $t('registration') }}</h1>
    <form @submit.prevent="submitForm" class="registration__form">
      <input-el
        v-model="$v.form.name.$model"
        :validation="$v.form.name"
        class="registration__field"
        :placeholder="$t('name')"
      />
      <input-el
        v-model="$v.form.email.$model"
        :validation="$v.form.email"
        class="registration__field"
        placeholder="Email"
      />
      <input-el
        v-model="$v.form.password.$model"
        :validation="$v.form.password"
        type="password"
        class="registration__field"
        :placeholder="$t('password')"
      />
      <button-auth class="registration__button">
        {{ $t('register') }}
      </button-auth>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email, minLength } from 'vuelidate/lib/validators'
import validateForm from '@/mixins/validateForm.js'
import InputEl from '@/components/InputEl'
import ButtonAuth from '@/components/ButtonAuth'

export default {
  name: 'registration',
  middleware: 'guest',
  mixins: [validateForm],
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
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
      },
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
    ...mapActions(['registrationUser']),
    submitForm() {
      this.validateForm().then(() => {
        this.registrationUser(this.form)
      })
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
