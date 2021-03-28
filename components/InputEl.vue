<template>
  <input
    class="input"
    :type="type"
    :value="value"
    v-bind="$attrs"
    @input="onInput"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  @include font(14px, $white-color);
  max-width: 215px;
  outline: none;
  padding: 12px 14px;
  line-height: 16px;
  border: 1px solid $white-color;
  border-radius: 3px;
  background: transparent;

  &:-webkit-autofill,
  &::placeholder {
    -webkit-text-fill-color: $white-color;
    -webkit-box-shadow: 0 0 0px 1000px $black-color inset;
  }
}
</style>
