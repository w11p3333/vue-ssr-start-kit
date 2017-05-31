<template>
  <div class="container">
    <logo :src="logoSrc" />
    <word class="hello" :text="helloText" />
    <pre>\{{ pwaText }}</pre>
  </div>
</template>

<script>
import logo from 'components/logo'
import word from 'components/word'
import { FETCH_INIT_TEXT } from 'consts'

export default {

  name: 'index',

  components: {
    logo,
    word
  },

  created () {
    console.log(this)
  },

  computed: {
    helloText () {
      return this.$store.state.initText
    }
  },

  asyncData: ({ store }) => store.dispatch(FETCH_INIT_TEXT),

  data: _ => ({
    logoSrc: 'public/image/logo.png',
    pwaText: process.env.NODE_ENV === 'production'
      ? 'Try turn off your network and reload this page'
      : 'Try `yarn build && yarn start` to use PWA'
  })

}
</script>

<style lang="scss">
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  .hello {
    font-size: 30px;
  }
}
</style>
