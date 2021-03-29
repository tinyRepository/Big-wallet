<template>
  <div class="input-field">
    <input
      class="input"
      :type="type"
      :value="value"
      v-bind="$attrs"
      @input="onInput"
    />
    <span class="input-error" v-if="showError">{{ $t('error') }} </span>
  </div>
</template>

// TODO add locale
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
    validation: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    showError() {
      const { $dirty, $invalid } = this.validation
      return $dirty && $invalid
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

.input-field {
  display: flex;
  flex-direction: column;
}

.input-error {
  @include font(14px, $red-color);
  text-align: center;
  margin-top: 4px;
}
</style>
