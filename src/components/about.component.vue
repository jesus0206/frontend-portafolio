<template>
  <div class="about">
    <div class="row px-2 bg-light py-4 px-4">
      <div class="text-size-title fw-bold">{{ name_data }}</div>
      <div class="text-size-title fw-bold mb-2">{{ professional_data }}</div>
      <div class="text-size-description text-justify">
        {{ about_data }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AboutComponent extends Vue {
  @Prop() private name!: string;
  @Prop() private professional!: string;
  @Prop() private about!: string;

  get name_data(): string {
    return this.name.toUpperCase();
  }
  get professional_data(): string {
    return this.professional.toUpperCase();
  }
  get about_data(): string {
    return this.about;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
