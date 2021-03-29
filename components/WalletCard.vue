<template>
  <div class="wallet-card">
    <div class="wallet-card__name">
      <img
        class="wallet-card__icon"
        :src="`https://cryptoicons.org/api/color/${wallet.slug}/64`"
      />
      <span class="wallet-card__title">
        {{ wallet.title }}
      </span>
    </div>
    <div class="wallet-card__value">{{ wallet.balance }} {{ wallet.slug }}</div>
    <div class="wallet-card__buttons">
      <button-el class="wallet-card__button" @click="workInProgress">
        {{ $t('get') }}
      </button-el>
      <button-el class="wallet-card__button" @click="workInProgress" filled>
        {{ $t('send') }}
      </button-el>
    </div>
  </div>
</template>

<script>
import ButtonEl from '@/components/ButtoneEl'

export default {
  components: {
    ButtonEl,
  },
  props: {
    wallet: {
      type: Object,
      required: true,
    },
  },
  methods: {
    workInProgress() {
      alert('Work in progress!')
    },
  },
}
</script>

<style lang="scss">
.wallet-card {
  border-radius: 10px;
  background: $card-gradient;
  padding: 12px 14px 14px;
  max-width: 216px;
  width: 100%;

  @media screen and (max-width: 600px) {
    margin: auto;
    border-radius: 16px;
    padding: 25px 25px 14px;
    max-width: 334px;
  }

  @media screen and (max-width: 400px) {
    max-width: 80%;
  }

  &__icon {
    width: 16px;
    height: 16px;

    @media screen and (max-width: 600px) {
      width: 28px;
      height: 27px;
    }
  }

  &__title {
    @include font(13px, $white-color);
    line-height: 15px;
    margin-left: 7px;
    text-transform: uppercase;

    @media screen and (max-width: 600px) {
      margin-left: 13px;
      font-size: 24px;
      letter-spacing: -0.6px;
    }
  }

  &__name {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__value {
    @include font(18px, $white-color, bold);
    text-transform: uppercase;
    line-height: 21px;
    margin-top: 12px;
    margin-bottom: 32px;

    @media screen and (max-width: 600px) {
      margin-top: 29px;
      font-size: 31px;
      margin-bottom: 66px;
      letter-spacing: 0.5px;
    }
  }

  &__button {
    max-width: 71px;

    @media screen and (max-width: 600px) {
      max-width: 126px;
      height: 37px;
      font-size: 16px;
      border-radius: 20px;
      margin-bottom: 10px;
    }

    &:first-child {
      margin-right: 7px;

      @media screen and (max-width: 600px) {
        margin-right: 16px;
      }
    }
  }

  &__buttons {
    margin-left: 1px;
  }
}
</style>
