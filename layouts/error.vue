<template>
  <div class="error">
    <nuxt-link to="/" class="error-link">{{ $t('goToHome') }}</nuxt-link>
  </div>
</template>

<style lang="scss">
.error-link {
  margin: 100px auto;
  display: flex;
  justify-content: center;
  text-align: center;
  @include font(32px, $white-color);
}
</style>
