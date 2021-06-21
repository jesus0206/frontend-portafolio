<template>
  <div class="hoja_vida">
    <div>
      <!-- <button
        type="button"
        class="btn btn-dark id_generator_pdf"
        id="id_generator_pdf"
        @click="createPDF"
      >
        Generar PDF
      </button> -->
    </div>
    <div class="container-fluid" ref="content">
      <div class="row">
        <div
          class="col-md-3 col-sm-4 m-0 p-0 bg-primary text-white"
          style="min-height: 100vh"
        >
          <!-- user infor -->
          <UserInfoComponent :user="user" />
          <!-- habilidades -->
          <SkillsComponent :skills="skills" />
          <!-- idioma -->
          <LanguagesComponent :languages="languages" />
          <!-- </div> -->
        </div>

        <div class="col-md-9 col-sm-8">
          <!-- acerca de -->
          <AboutComponent
            :about="user.about"
            :name="user.name + ' ' + user.last_name"
            :professional="user.prefession"
          />
          <!-- experiencias -->
          <ExperiencesComponent :experiences="experiences" />
          <!-- educacion -->
          <EducationComponent :education="educations" />
        </div>
      </div>
      <!-- <div class="col">Column</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  Education,
  Experience,
  Language,
  Response,
  Skill,
  User,
} from "../interface/index";
import EducationComponent from "@/components/education.component.vue"; // @ is an alias to /src
import AboutComponent from "@/components/about.component.vue"; // @ is an alias to /src
import ExperiencesComponent from "@/components/experience.component.vue"; // @ is an alias to /src
import LanguagesComponent from "@/components/languages.component.vue"; // @ is an alias to /src
import SkillsComponent from "@/components/skills.component.vue"; // @ is an alias to /src
import UserInfoComponent from "@/components/user_info.component.vue"; // @ is an alias to /src

@Component({
  components: {
    EducationComponent,
    AboutComponent,
    ExperiencesComponent,
    LanguagesComponent,
    SkillsComponent,
    UserInfoComponent,
  },
})
export default class HojaVidaView extends Vue {
  private user: User = {
    name: "",
    last_name: "",
    image: "",
    ci: "",
    about: "",
    prefession: "",
    mail: "",
    address: "",
    cellphone: "",
    date_birth: "",
    nationality: "",
    links: [],
    skills: [],
    languages: [],
    educations: [],
    experiences: [],
  };

  $refs!: {
    content: HTMLElement;
  };

  created() {
    fetch("http://localhost:8085/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            User(id:1){
              name,
              last_name,
              ci,
              image,
              about,
              prefession,
              mail,
              address,
              cellphone,
              date_birth,
              nationality,
              links{
                name,
                link
              },
              skills{
                name
              },
              languages{
                name,level
              },
              educations{
                title,entity,location,date_end,date_init,
              }
              experiences{
                title,entity,location,date_end,date_init,description
              }
            }
          }
        `,
      }),
    })
      .then((data) => data.json())
      .then((data: Response) => {
        this.user = data.data.User;
      });
  }

  get user_data(): User {
    return this.user;
  }
  get languages(): Language[] {
    return this.user.languages;
  }
  get skills(): Skill[] {
    return this.user.skills;
  }
  get educations(): Education[] {
    return this.user.educations;
  }
  get experiences(): Experience[] {
    return this.user.experiences;
  }

  async query(): Promise<Response> {
    let query = await fetch("http://localhost:8085/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            User(id:1){
              name,
              image,
              last_name,
              ci,
              about,
              prefession,
              mail,
              address,
              cellphone,
              date_birth,
              nationality,
              links{
                name,
                link
              },
              skills{
                name
              },
              languages{
                name,level
              },
              educations{
                title,entity,location,date_end,date_init,
              }
              experiences{
                title,entity,location,date_end,date_init,description
              }
            }
          }
        `,
      }),
    });
    let r_data = await query.json();
    console.log(r_data);
    return r_data;
  }

  // createPDF() {
  //   var pdf = new jsPDF("p", "pt", "letter");
  //   var width = 600;
  //   // var width = 792;
  //   document.body.style.width = width + "px";

  //   let body: any = document.body;
  //   body.querySelector("#id_generator_pdf").style.display = "none";

  //   pdf.html(body, {
  //     callback: function (pdf: any) {
  //       pdf.save("holis.pdf");
  //     },
  //     image: {
  //       type: "png",
  //       quality: 200,
  //     },
  //   });
  // }
}
</script>
