<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">String Utilities</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/encode">Encode</router-link></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Navbar'
}
</script>

<style>
</style>
