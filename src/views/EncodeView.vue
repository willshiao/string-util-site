<template>

<div class="container">
  <h2>Encode/Decode</h2>
  <form class="">
    <div class="form-group">
      <label for="encoding-input">Input</label>
      <textarea id="encoding-input" class="form-control" autocomplete="off" rows="8"
        autocorrect="off" autocapitalize="off" spellcheck="false" v-model="input"></textarea>
    </div>
    <div class="row">
      <div class="form-group col-xs-3">
        <label>Convert text
          <span v-if="encoding">to: </span>
          <span v-else>from: </span>
        </label>
        <select v-model="selected" class="custom-select" id="encoding-type">
          <option value="base2">Binary</option>
          <option value="base8">Octal</option>
          <option value="base10">Decimal</option>
          <option value="base16">Hexadecimal</option>
          <option value="base32">Base 32</option>
          <option value="base64">Base 64</option>
        </select>
      </div>
      <div class="form-group col-xs-4 row">
        <label for="seperator-input" class="col-xs-2">Seperator: </label>
        <div class="col-xs-10">
          <input class="form-control" type="text" id="seperator-input" v-model="seperator">
        </div>
      </div>
      
    </div>
    <div class="btn-group" data-toggle="buttons">
      <label class="btn btn-primary active" v-on:click="updateMode" id="encode-label">
        <input type="radio" name="mode" id="encode-item"> Encode
      </label>
      <label class="btn btn-primary" v-on:click="updateMode" id="decode-label">
        <input type="radio" name="mode" id="decode-item"> Decode
      </label>
    </div>
    <div class="form-group">
      <label for="encoding-output">Output</label>
      <textarea id="encoding-output" class="form-control" autocomplete="off" rows="8"
        autocorrect="off" autocapitalize="off" spellcheck="false">{{output}}</textarea>
    </div>
    <button type="button" class="btn btn-primary" v-on:click="selectOutput">Select All</button>
  </form>
</div>

</template>

<script>

import * as base32 from 'hi-base32';
import * as base64 from 'crypto-js/enc-base64';
import * as utf8 from 'crypto-js/enc-utf8';
import * as utf16 from 'crypto-js/enc-utf16';


function strToBaseStr(str, seperator, baseN) {
  const outArr = [];
  for(let i = 0; i < str.length; ++i) {
    outArr.push((str.codePointAt(i) || 0).toString(baseN));
  }
  return outArr.join(seperator);
}

function baseStrToStr(baseStr, seperator, baseN) {
  return baseStr.split(seperator)
    .map(nStr => String.fromCodePoint(parseInt(nStr, baseN)||0))
    .join('');
}

export default {
  name: 'EncodeView',
  data() {
    return {
      selected: 'base2',
      input: 'The quick brown fox jumps over the lazy dog. 01234566789',
      seperator: ' ',
      encoding: true
    };
  },
  methods: {
    updateMode: function(evt) {
      this.encoding = (evt.target.id === 'encode-label');
    },
    selectOutput: function(evt) {
      $('#encoding-output').select();
    }
  },
  computed: {
    output: function() {
      try {
        if(this.encoding) {
          switch(this.selected) {
          case 'base2':
            return strToBaseStr(this.input, this.seperator, 2);
          case 'base8':
            return strToBaseStr(this.input, this.seperator, 8);
          case 'base10':
            return strToBaseStr(this.input, this.seperator, 10);
          case 'base16':
            return strToBaseStr(this.input, this.seperator, 16);
          case 'base32':
            return base32.encode(this.input);
          case 'base64':
            return base64.stringify(utf8.parse(this.input));
          }
        } else {
          switch(this.selected) {
          case 'base2':
            return baseStrToStr(this.input, this.seperator, 2);
          case 'base8':
            return baseStrToStr(this.input, this.seperator, 8);
          case 'base10':
            return baseStrToStr(this.input, this.seperator, 10);
          case 'base16':
            return baseStrToStr(this.input, this.seperator, 16);
          case 'base32':
            return base32.decode(this.input);
          case 'base64':
            return base64.parse(this.input).toString(utf8);
          }
        }
      } catch(e) {
        console.error('Error: ' + e.stack);
        return '';
      }
    }
  }
}

</script>

<style>
@media (min-width: 1200px) {
  div.container {
  max-width: 1440px !important;
  }
}
</style>
