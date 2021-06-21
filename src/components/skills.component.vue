<template>
  <div class="about">
    <div class="container-fluid">
      <p class="text-size-title fw-bold text-capitalize mb-3">Habilidades</p>
      <hr class="dropdown-divider" />
      <ul class="list-group" style="list-style: none">
        <li v-for="(skill, index) in list_skill" :key="index">
          <div class="text-size-skill mb-1">{{ skill.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Skill } from "../interface/index";

@Component
export default class SkillsComponent extends Vue {
  @Prop() private skills!: Skill[];

  get list_skill(): [Skill] {
    return this.$props.skills;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
