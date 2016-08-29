<template>

<div class="container">
  <h3>Hash</h3>
  <form class="">
    <div class="form-group">
      <label for="hashing-input">Input</label>
      <textarea id="hashing-input" class="form-control" autocomplete="off" rows="8"
        autocorrect="off" autocapitalize="off" spellcheck="false" v-model="input"></textarea>
    </div>
    <div class="row">
      <div class="form-group col-xs-4">
        <label>Hash type: </label>
        <select v-model="hashAlgo" class="custom-select" id="encoding-type">
          <option v-for="hashType in hashTypes" v-bind:value="hashType">{{hashType}}</option>
        </select>
      </div>
      <div class="form-group col-xs-4">
        <label>Output Format: </label>
        <select v-model="hashEnc" class="custom-select" id="encoding-type">
          <option v-for="encoding in encodings" v-bind:value="encoding">{{encoding}}</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="hashing-output">Output</label>
      <textarea id="hashing-output" class="form-control" autocomplete="off" rows="8"
        autocorrect="off" autocapitalize="off" spellcheck="false">{{output}}</textarea>
    </div>
    <button type="button" class="btn btn-primary" v-on:click="selectOutput">Select</button>
  </form>
</div>

</template>

<script>

import * as latin1Enc from 'crypto-js/enc-latin1';
import * as hexEnc from 'crypto-js/enc-hex';
import * as utf8Enc from 'crypto-js/enc-utf8';
import * as utf16Enc from 'crypto-js/enc-utf16';
import * as base64Enc from 'crypto-js/enc-base64';
import * as md5 from 'crypto-js/md5';
import * as sha1 from 'crypto-js/sha1';
import * as sha256 from 'crypto-js/sha256';
import * as sha224 from 'crypto-js/sha224';
import * as sha512 from 'crypto-js/sha512';
import * as sha384 from 'crypto-js/sha384';
import * as sha3 from 'crypto-js/sha3';
import * as ripemd160 from 'crypto-js/ripemd160';

const algoMap = {
  'MD5': md5,
  'SHA-1': sha1,
  'SHA-256': sha256,
  'SHA-224': sha224,
  'SHA-512': sha512,
  'SHA-384': sha384,
  'SHA-3': sha3,
  'RIPEMD-160': ripemd160
};

const encMap = {
  'Hex': hexEnc,
  'Latin-1': latin1Enc,
  'UTF-8': utf8Enc,
  'UTF-16': utf16Enc,
  'Base-64': base64Enc
};

export default {
  name: 'HashView',
  data() {
    return {
      input: 'The quick brown fox jumps over the lazy dog. 01234566789',
      hashAlgo: 'MD5',
      hashEnc: 'Hex',
      hashTypes: Object.keys(algoMap),
      encodings: Object.keys(encMap)
    }
  },
  methods: {
    selectOutput: function(evt) {
      $('#hashing-output').select();
    }
  },
  computed: {
    output: function() {
      try {
        if((this.hashAlgo in algoMap) && (this.hashEnc in encMap)) {
          return algoMap[this.hashAlgo](this.input)
            .toString(encMap[this.hashEnc]);
        }
      } catch(e) {
        console.error('Error:', e.message);
        return '';
      }
    }
  }
};

</script>