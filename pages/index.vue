<template>
  <div class="wallets">
    <div class="wallets__balance">
      <div class="wallets__balance-label">{{ $t('totalBalance') }}</div>
      <div class="wallets__balance-sum" v-if="totalBalance">
        {{ totalBalance }}$
      </div>
    </div>

    <div class="wallets__list">
      <wallet-card
        v-for="wallet in wallets"
        :wallet="wallet"
        :key="wallet.id"
      />
    </div>
    <SpinnerEl v-if="loading" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import WalletCard from '../components/WalletCard'
import SpinnerEl from '../components/SpinnerEl'

export default {
  name: 'wallets',
  middleware: 'auth',
  components: {
    WalletCard,
    SpinnerEl,
  },
  async created() {
    await this.getWallets()
  },
  computed: {
    ...mapState(['wallets', 'totalBalance', 'loading']),
  },
  methods: {
    ...mapActions(['getWallets']),
  },
}
</script>

<style lang="scss">
.wallets {
  margin-bottom: 50px;

  &__balance-label {
    @include font(14px, $white-color, 300);
    line-height: 16px;
    margin-bottom: 5px;

    @media screen and (max-width: 600px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  &__list {
    display: grid;
    grid-row-gap: 15px;
    grid-template-columns: repeat(3, 188px);
    grid-column-gap: 43px;

    @media screen and (max-width: 900px) {
      justify-content: center;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 188px);
    }

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      margin: auto;
    }
  }

  &__balance {
    margin-bottom: 28px;

    @media screen and (max-width: 800px) {
      text-align: center;
      margin-top: 46px;
      margin-bottom: 24px;
    }
  }

  &__balance-sum {
    font-family: Roboto;
    font-weight: bold;
    line-height: 21px;
    font-size: 18px;
    background: $card-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 600px) {
      font-size: 24px;
      line-height: 28px;
      margin-top: 6px;
    }
  }
}
</style>
