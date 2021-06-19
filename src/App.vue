<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div>
      <button
        type="button"
        class="btn btn-dark id_generator_pdf"
        id="id_generator_pdf"
        @click="createPDF"
      >
        Generar PDF
      </button>
    </div>
    <div class="container-fluid" ref="content">
      <div class="row">
        <div
          class="col-md-4 col-sm-5 m-0 p-0 bg-primary text-white"
          style="min-height: 100vh"
        >
          <!-- user infor -->
          <div class="container-fluid pt-2 align-center">
            <img
              class="rounded-circle img-fluid"
              alt="100x100"
              data-holder-rendered="true"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAFSDNYfAAAAaklEQVR42u3XQQrAIAwAQeP%2F%2F6wf8CJBJTK9lnQ7FpHGaOurt1I34nfH9pMMZAZ8BwMGEvvh%2BBsJCAgICLwIOA8EBAQEBAQEBAQEBK79H5RfIQAAAAAAAAAAAAAAAAAAAAAAAAAAAID%2FABMSqAfj%2FsLmvAAAAABJRU5ErkJggg%3D%3D"
            />

            
            <p class="h5 fw-bolder text-capitalize my-3">Datos personales</p>
            <ul class="list-group" style="list-style: none">
              <li class="mb-2">
                <div class="card-subtitle fw-bold">Email</div>
                <div class="card-subtitle">jesus.tn79@gmail.com</div>
              </li>
              <li class="mb-2">
                <div class="card-subtitle fw-bold">Dirección</div>
                <div class="card-subtitle">
                  Calle Camargo entre Bolivar y Avaroa
                </div>
              </li>
            </ul>
            <hr class="dropdown-divider" />
          </div>
          <!-- habilidades -->
          <div class="container-fluid">
            <p class="h5 fw-bold text-capitalize my-3">Habilidades</p>
            <ul class="list-group" style="list-style: none">
              <li><div class="card-subtitle">Docker</div></li>
              <li><div class="card-subtitle">Deno</div></li>
              <li><div class="card-subtitle">Flutter</div></li>
              <li><div class="card-subtitle">Linux</div></li>
              <li><div class="card-subtitle">C# .Net</div></li>
            </ul>
            <hr class="dropdown-divider" />
          </div>
          <!-- idioma -->
          <div class="container-fluid">
            <div class="h5 fw-bold text-capitalize my-3">Idioma</div>
            <ul class="list-group" style="list-style: none">
              <li class="mb-2">
                <div class="card-subtitle fw-bold">Español</div>
                <div class="card-subtitle">Nativo</div>
              </li>
              <li>
                <div class="card-subtitle fw-bold">Ingles</div>
                <div class="card-subtitle">Basico</div>
              </li>
            </ul>
          </div>
          <!--  -->
          <!-- </div> -->
        </div>

        <div class="col-md-8 col-sm-7">
          <!-- acerca de -->
          <div class="row px-2 bg-light py-4 px-4">
            <div class="h5 fw-bold">JESUS PAREDES TOMAS NICASIO</div>
            <div class="h6 fw-bold mb-2">
              INGENIERO EN CIENCIAS DE LA COMPUTACIÓN
            </div>
            <div class="text-justify">
              Soy egresado de la carrera de Ing. Ciencias de la Computación en
              la Universidad San Francisco Xavier de Chuquisaca, me considero
              una persona muy curiosa, amante de la tecnología, también me
              gustan los retos y conocer personas mucho más competentes que mi
              persona, siendo una inspiración para luego convertirme en una
              persona más capaz.
            </div>
          </div>
          <!-- experiencias -->
          <div class="row px-2 pt-0 mt-4">
            <div class="h6 mb-3">Experiencias</div>
            <ul class="list-group px-4">
              <li class="m-0 p-0">
                <div class="card-body m-0 p-0">
                  <div class="fw-bold text-primary">Desarrollo Móvil</div>
                  <div class="h6 card-title mb-2 fw-bold text-dark">
                    Tribunal Departemental de Justicia de Chuquisaca Órgano
                    Judicial
                  </div>
                  <div class="card-subtitle mb-2 fst-italic">
                    Sucre, Bolivia
                  </div>
                  <div class="card-subtitle mb-2 fw-lighter">
                    Noviembre 2020 - Abril 2021
                  </div>
                  <p class="text-justify m-0 fs-6">
                    Desarrollo de la aplicación móvil para el fichaje
                    electrónico(TDJ Ticket) para el Tribunal Departamental de
                    Justicia - Órgano Judicial, la aplicaion se base en las
                    siguientes tecnologias, Desktop(C#, .Net), Backend(Golang,
                    WebSocket, Gorilla, NodeJS) Aplicación móvil(Flutter, Dart,
                    manejo de Clean Architechure), Web(VueJs, Vuex, Vuetify) y
                    otros(Docker, Git,Bitbucket).
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <!-- educacion -->
          <div class="row px-2 pt-0 mt-4">
            <div class="h6 mb-2">Formación Academica</div>
            <ul class="list-group px-4">
              <li class="m-0 p-0">
                <div class="card-body m-0 p-0">
                  <h5 class="card-title fw-bold text-primary">
                    Curso de Hacking Etico
                  </h5>
                  <h6 class="card-title mb-2 fw-bold">
                    Universidad San Misael Saracho
                  </h6>
                  <h6 class="card-subtitle mb-2 fst-italic">Sucre, Bolivia</h6>
                  <h6 class="card-subtitle mb-2 fw-lighter">
                    Noviembre 2020 - Abril 2021
                  </h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="col">Column</div> -->
    </div>
    <!-- <router-view /> -->
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { jsPDF } from "jspdf";
// import * as jsPDF from "jspdf";

@Component
export default class HelloWorld extends Vue {
  $refs!: {
    content: HTMLElement;
  };
  createPDF() {
    var pdf = new jsPDF("p", "pt", "letter");
    var width = 600;
    // var width = 792;
    document.body.style.width = width + "px";

    let body: any = document.body;
    body.querySelector("#id_generator_pdf").style.display = "none";

    pdf.html(body, {
      callback: function (pdf: any) {
        pdf.save("holis.pdf");
      },
      image: {
        type: "png",
        quality: 200,
      },
    });
  }
}
</script>


<style lang="scss">
.fill {
  min-height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
