<template>

<div class="container">
  <h4>Encode/Decode</h4>
  <form class="">
    <div class="row">
      <div class="input-field col s12">
        <select>
        </select>
        <label>Materialize Select</label>
      </div>
    </div>
  </form>
  {{crypted}}
</div>

</template>

<script>

import * as CryptoJs from 'crypto-js';

$(() => {
  $('select').material_select();
});

export default {
  data() {
    return {
      crypted: CryptoJs.AES.encrypt('test', 'test123').toString()
    };
  }
}

</script>

<style>
</style>
