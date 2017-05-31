<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

.view {
  height: 100%;
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
 transition: all .2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
