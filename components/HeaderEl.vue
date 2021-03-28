<template>
  <header class="header">
    <nuxt-link to="/" class="header__logo"></nuxt-link>

    <nav class="header__navigation">
      <template v-if="isAuth">
        <nuxt-link to="/wallets" class="header__link">Кошельки</nuxt-link>
        <button class="header__link header__logout">Выйти</button>
      </template>

      <template v-else>
        <nuxt-link to="/login" class="header__link">Вход</nuxt-link>
        <nuxt-link to="/registration" class="header__link">
          Регистрация
        </nuxt-link>
      </template>
    </nav>

    <div class="header__locales">
      <button class="header__locale">ru</button>
      <button class="header__locale header__locale_active">en</button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuth']),
  },
}
</script>

<style lang="scss">
.header {
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  grid-template-rows: auto;
  max-width: 800px;
  margin: 30px auto 34px;

  &__logo {
    background: url('~assets/svg/logo.svg') no-repeat;
    width: 126px;
    height: 20px;
    margin-top: 7px;
    margin-left: 2px;
    user-select: none;
  }

  &__navigation {
    margin-right: -17px;
    margin-left: auto;
  }

  &__link {
    @include font(18px, $white-color, 300);
    line-height: 21px;
    user-select: none;
    text-decoration: none;
    transition: 0.3s opacity;

    &:hover {
      opacity: 0.5;
    }

    &:not(:last-child) {
      margin-right: 18px;
    }
  }

  &__logout {
    @include removeBtnDefaults;
    @include font(18px, $white-color, 300);
    line-height: 21px;
  }

  &__locales {
    margin-left: auto;
    margin-right: 3px;
  }

  &__locale {
    @include font(18px, $white-color, 300);
    @include removeBtnDefaults;
    text-transform: uppercase;
    line-height: 21px;

    &:first-child {
      margin-right: 12px;
    }

    &_active {
      font-weight: bold;
    }
  }
}
</style>
