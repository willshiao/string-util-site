<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';

export default {

  data() {
    return {
      msg: 'Hello Vue!'
    };
  },
  components: {
    'navbar': Navbar
  }
}

</script>

<style>
</style>
