<template>
  <div class="menu-overlay">
    <div class="menu-overlay__content">
      <template v-if="isAuth">
        <nuxt-link to="/" class="menu-overlay__link">{{
          $t('wallets')
        }}</nuxt-link>
        <button class="menu-overlay__link menu-overlay__logout" @click="logOut">
          {{ $t('logOut') }}
        </button>
      </template>

      <template v-else>
        <nuxt-link to="/login" class="menu-overlay__link">{{
          $t('signIn')
        }}</nuxt-link>
        <nuxt-link to="/registration" class="menu-overlay__link">
          {{ $t('registration') }}
        </nuxt-link>
      </template>

      <div class="menu-overlay__locales">
        <button
          class="menu-overlay__locale"
          @click="handleChangeLocale('ru')"
          :class="{
            'menu-overlay__locale_active': $i18n.locale === 'ru',
          }"
        >
          ru
        </button>
        <button
          class="menu-overlay__locale"
          @click="handleChangeLocale('en')"
          :class="{
            'menu-overlay__locale_active': $i18n.locale === 'en',
          }"
        >
          en
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted() {
    const locale = localStorage.getItem('locale') || 'ru'
    this.$i18n.locale = locale
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
}
</script>

<style lang="scss">
.menu-overlay {
  position: fixed;
  background: $black-color;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 108px;
  }

  &__link {
    @include font(36px, $white-color, 300);
    line-height: 42px;
    user-select: none;
    text-decoration: none;
    transition: 0.3s opacity;
    margin-bottom: 33px;

    &:hover {
      opacity: 0.5;
    }
  }

  &__locales {
    margin-top: 19px;
  }

  &__logout {
    @include removeBtnDefaults;
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
