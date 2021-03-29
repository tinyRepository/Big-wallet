<template>
  <button
    class="button"
    :class="{ button_filled: filled }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    filled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.button {
  @include removeBtnDefaults;
  @include font(9px, $white-color);
  padding: 4px 10px;
  width: 100%;
  height: 21px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid $white-color;

  &_filled {
    background: $white-color;
    color: $black-color;
  }
}
</style>
