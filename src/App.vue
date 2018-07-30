<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./shared/Header";
import Footer from "./shared/Footer";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  }

}
</script>


<style lang="scss" scoped>

</style>

