<template>
  <div class="about">
    <div class="container-fluid pt-2 align-center">
      <div class="col center mt-2">
        <!-- <img
          class="rounded-circle img-fluid"
          alt="100x100"
          style="width: 60%; heigth: 60%"
          data-holder-rendered="true"
          :src="user_data.image"
        /> -->
      </div>
      <p class="text-size-title fw-bolder text-capitalize my-3">
        DATOS PERSONALES
      </p>
      <hr class="dropdown-divider" />
      <ul class="list-group" style="list-style: none">
        <li class="mb-2">
          <div class="text-size-caption fw-bold">Nombre</div>
          <div class="text-size-subtitle">
            {{ user_data.name.toUpperCase() }}
          </div>
          <div class="text-size-caption fw-bold mt-1">Apellido</div>
          <div class="text-size-subtitle">
            {{ user_data.last_name.toUpperCase() }}
          </div>
        </li>
        <li class="mb-2">
          <div class="text-size-caption fw-bold">CI</div>
          <div class="text-size-subtitle">{{ user_data.ci }}</div>
        </li>
        <li class="mb-2">
          <div class="text-size-caption fw-bold">Pais</div>
          <div class="text-size-subtitle">
            {{ user_data.nationality }}
          </div>
        </li>
        <li class="mb-2">
          <div class="text-size-caption fw-bold">Celular</div>
          <div class="text-size-subtitle">
            {{ user_data.cellphone }}
          </div>
        </li>
        <li class="mb-2">
          <div class="text-size-caption fw-bold">Fecha de Nacimiento</div>
          <div class="text-size-subtitle">{{ birth }}</div>
        </li>
        <li class="mb-2">
          <div class="text-size-caption fw-bold">Email</div>
          <div class="text-size-subtitle text-mail">
            {{ user_data.mail }}
          </div>
        </li>
        <li class="mb-2">
          <div class="text-size-caption fw-bold">Dirección</div>
          <div class="text-size-subtitle">
            {{ user_data.address }}
          </div>
        </li>
        <li class="mb-2">
          <div class="text-size-caption fw-bold mt-1 mb-2">ENLACES</div>
          <hr class="dropdown-divider" />
          <div v-for="(item, index) in links" :key="index" class="mb-2">
            <div class="text-size-info1">[{{ item.name }}]</div>
            <div class="text-mail text-justify">
              {{ item.link }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Link, User } from "../interface/index";
import { get_date_birth } from "../utils/date.util";

@Component
export default class UserComponent extends Vue {
  @Prop() private user!: User;
  get user_data(): User {
    return this.user;
  }
  get links(): Link[] {
    return this.user.links;
  }
  get birth(): string {
    return get_date_birth(this.user.date_birth);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
