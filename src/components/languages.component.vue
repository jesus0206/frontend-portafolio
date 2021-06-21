<template>
  <div class="about">
    <div class="container-fluid">
      <div class="text-size-title fw-bold text-capitalize my-3">Idiomas</div>
      <hr class="dropdown-divider" />
      <ul class="list-group" style="list-style: none">
        <li class="mb-2" v-for="(item, index) in list_languages" :key="index">
          <div class="text-size-caption fw-bold">
            {{ item.name }}
          </div>
          <div class="text-size-subtitle">{{ item.level }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Language } from "../interface/index";

@Component
export default class LanguagesComponent extends Vue {
  @Prop() private languages!: [Language];
  get list_languages(): Language[] {
    return this.languages;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
