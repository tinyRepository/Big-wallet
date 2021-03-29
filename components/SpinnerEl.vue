<template>
  <div class="spinner-container">
    <self-building-square-spinner
      :animation-duration="6000"
      :size="60"
      color="#ff1d5e"
    />
  </div>
</template>

<script>
import { SelfBuildingSquareSpinner } from 'epic-spinners/dist/lib/epic-spinners.min.js'

export default {
  components: {
    SelfBuildingSquareSpinner,
  },
}
</script>

<style lang="scss">
@import 'epic-spinners/dist/lib/epic-spinners.min.css';

.spinner-container {
  background: $black-color;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
