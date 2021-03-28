<template>
  <div>
    <header-el />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import HeaderEl from '~/components/HeaderEl'

export default {
  components: {
    HeaderEl,
  },
}
</script>

<style lang="scss">
.container {
  margin: auto;
  max-width: 800px;
  width: 100%;
}
</style>
