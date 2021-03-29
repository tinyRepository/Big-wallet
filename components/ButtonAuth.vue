<template>
  <div>
    <button class="button-auth" :disabled="loading">
      <template v-if="!loading">
        <slot />
      </template>
      <span class="dot-spinner" v-else>
        <span class="dot1"></span>
        <span class="dot2"></span>
        <span class="dot3"></span>
      </span>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['loading']),
  },
}
</script>

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
.dot-spinner {
  opacity: 0.8;
}
.dot-spinner span {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: $white-color;
  position: relative;
  animation: fade 1s infinite;

  &.dot1 {
    left: -14px;
    animation-delay: 1s;
  }
  &.dot2 {
    left: -2px;
    animation-delay: 0.21s;
  }
  &.dot3 {
    left: 10px;
    animation-delay: 0.4s;
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
