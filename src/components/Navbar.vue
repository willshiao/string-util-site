<template>
  <nav class="navbar navbar-dark bg-primary">
    <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">
      &#9776;
    </button>
    <div class="collapse navbar-toggleable-xs" id="collapsingNavbar">
      <router-link class="navbar-brand" to="/">String Utilities</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" activeClass="active" exact to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" activeClass="active" to="/encode">Encode/Decode</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" activeClass="active" to="/hash">Hash</router-link>
        </li>
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
nav.navbar {
  margin-bottom: 20px;
}
</style>
