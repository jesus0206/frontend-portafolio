<template>
  <div class="education">
    <div class="row px-2 pt-0 mt-1">
      <div class="text-size-exp-edu mb-2">Formación Academica</div>
      <ul class="list-group px-4">
        <li class="mb-3" v-for="(item, index) in list_educations" :key="index">
          <div class="card-body m-0 p-0">
            <div class="text-size-experience-title fw-bold text-primary">
              {{ item.title.toUpperCase() }}
            </div>
            <div class="text-size-experience-entity fw-bold">
              {{ item.entity }}
            </div>
            <div class="text-size-experience-location fst-italic">
              {{ item.location }}
            </div>
            <div class="text-size-experience-date fw-lighter">
              {{ date(item.date_init, item.date_end) }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Education } from "../interface/index";
import { get_date_work } from "../utils/date.util";

@Component
export default class EducationComponent extends Vue {
  @Prop() private education!: Education[];

  get list_educations(): Education[] {
    return this.education;
  }
  date(init_date: string, end_date: string): string {
    return get_date_work(init_date) + " - " + get_date_work(end_date);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
