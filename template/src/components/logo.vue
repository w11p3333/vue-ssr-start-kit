<template>
  <img class="logo" :src="src" />
</template>

<script>
export default {

  name: 'logo',

  props: {
    src: String
  }

}
</script>

<style lang="scss" scope>
  .logo {
    $size: 200px;
    width: $size;
    height: $size;
  }
</style>