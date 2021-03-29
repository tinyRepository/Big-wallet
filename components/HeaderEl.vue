<template>
  <header class="header">
    <nuxt-link to="/" class="header__logo"></nuxt-link>

    <nav class="header__navigation">
      <template v-if="isAuth">
        <nuxt-link to="/" class="header__link">{{ $t('wallets') }}</nuxt-link>
        <button class="header__link header__logout" @click="logOut">
          {{ $t('logOut') }}
        </button>
      </template>

      <template v-else>
        <nuxt-link to="/login" class="header__link">
          {{ $t('signIn') }}
        </nuxt-link>
        <nuxt-link to="/registration" class="header__link">
          {{ $t('registration') }}
        </nuxt-link>
      </template>
    </nav>

    <div class="header__locales">
      <button
        class="header__locale"
        @click="handleChangeLocale('ru')"
        :class="{
          header__locale_active: $i18n.locale === 'ru',
        }"
      >
        ru
      </button>
      <button
        class="header__locale"
        @click="handleChangeLocale('en')"
        :class="{
          header__locale_active: $i18n.locale === 'en',
        }"
      >
        en
      </button>
    </div>

    <div
      class="header__burger"
      :class="{ header__burger_active: showMenu }"
      @click="showMenu = !showMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <menu-overlay v-if="showMenu" />
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MenuOverlay from '@/components/MenuOverlay'

export default {
  data() {
    return {
      showMenu: false,
    }
  },
  components: {
    MenuOverlay,
  },
  computed: {
    ...mapGetters(['isAuth']),
  },
  methods: {
    ...mapActions(['logOut']),
    handleChangeLocale(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale)
    },
  },
  watch: {
    $route: {
      handler() {
        this.showMenu = false
        const token = this.$cookiz.get('access_token')
        if (token) {
          this.$store.commit('SET_AUTH', token)
        }
        if (process.browser) {
          const locale = localStorage.getItem('locale') || 'ru'
          this.$i18n.locale = locale
        }
      },
      immediate: true,
    },
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
  position: relative;

  @media screen and (max-width: 600px) {
    margin: 18px auto 34px;
  }

  &__logo {
    background: url('~assets/svg/logo.svg') no-repeat;
    position: relative;
    z-index: 2;
    width: 126px;
    height: 20px;
    margin-top: 7px;
    margin-left: 2px;
    user-select: none;

    @media screen and (max-width: 600px) {
      margin-left: 15px;
    }
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

    @media screen and (max-width: 600px) {
      display: none;
    }
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

  &__burger {
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: 5px;
    right: 14px;
    display: none;

    @media screen and (max-width: 600px) {
      display: block;
    }

    & > span {
      display: block;
      background: $white-color;
      width: 26px;
      height: 5px;
      margin-bottom: 5px;
      transition: transform 0.5s;
      transform-origin: 26px 2px;
    }

    &_active {
      & > span {
        transform: rotate(45deg) translate(-2px, -1px);
      }

      & > span:nth-last-child(3) {
        transform: rotate(-45deg) translate(0, -1px);
      }

      & > span:nth-last-child(2) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
    }
  }

  &__navigation {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
}
</style>
