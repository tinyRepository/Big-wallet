<template>
  <button class="button-auth">
    <slot />
  </button>
</template>

<style lang="scss">
.button-auth {
  @include removeBtnDefaults;
  @include font(14px, $white-color, bold);
  text-align: center;
  background: $button-gradient;
  border-radius: 3px;
  padding: 12px;
  width: 100%;
  line-height: 16px;
}
</style>
