<template>
  <div>
    <Toolbar />
    <div v-if="loading">
      <loading />
    </div>

    <div class="ma-0 pa-0" v-if="!loading">
      <v-row no-gutters>
        <v-col sm="12" md="6" class="accent d-flex justify-center">
          <v-card class="ma-10 transparent" outlined width="100%">
            Beste {{ persData.first_name }} {{ persData.last_name }},
            <br /><br />
            {{ textInfo[0].screen }} <br /><br />
            {{ textInfo[1].screen }} <br /><br />
            {{ textInfo[2].screen }} <br /><br />
            {{ textInfo[3].screen }} <br /><br />
            {{ textInfo[4].screen }} <br /><br />
            {{ textInfo[5].screen }} <br /><br />
          </v-card>
        </v-col>
        <v-col sm="12" md="6" class="d-flex justify-center">
          <v-card
            class="ma-10 transparent"
            outlined
            width="100%"
            height="200vh"
          >
            <v-list-item
              three-line
              class="elevation-14 info"
              v-if="statusMod.a_module"
              @click="$router.push({ name: 'Module1' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[1].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[1].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon x-large color="primary"> mdi-check </v-icon>
                  <div class="text-end">
                    <v-btn color="accent" class="mr-3">start</v-btn>
                  </div>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.b_module"
              @click="$router.push({ name: 'Module2' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[2].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[2].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.c_module"
              @click="$router.push({ name: 'Module3' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[3].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[3].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.d_module"
              @click="$router.push({ name: 'Module4' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[4].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[4].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.e_module"
              @click="$router.push({ name: 'Module5' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[5].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[5].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.f_module"
              @click="$router.push({ name: 'Module6' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[6].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[6].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.g_module"
              @click="$router.push({ name: 'Module7' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[7].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[7].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.h_module"
              @click="$router.push({ name: 'Module8' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[8].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[8].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.i_module"
              @click="$router.push({ name: 'Module9' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[9].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[9].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.j_module"
              @click="$router.push({ name: 'Module10' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[10].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[10].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.k_module"
              @click="$router.push({ name: 'Module11' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[11].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[11].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.l_module"
              @click="$router.push({ name: 'Module12' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[12].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[12].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.m_module"
              @click="$router.push({ name: 'Module13' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[13].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[13].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.n_module"
              @click="$router.push({ name: 'Module14' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[14].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[14].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              three-line
              class="elevation-14 info mt-5"
              v-if="statusMod.o_module"
              @click="$router.push({ name: 'Module15' })"
            >
              <v-list-item-content>
                <v-list-item-title>{{ textMod[15].module }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  textMod[15].text
                }}</v-list-item-subtitle>
                <v-list-item-subtitle class="text-end">
                  <v-btn color="accent" class="mr-3">start</v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
import { mapGetters } from "vuex";
import Toolbar from "@/components/core/Toolbar";
import textData from "@/text/modules.json";
import ModuleService from "@/services/ModuleService";
import infoText from "@/text/textmodules.json";
import Loading from "@/components/core/loading";
import axios from "axios";
export default {
  components: { Loading, Toolbar },
  data() {
    return {
      loading: false,
      error: null,
      sl_a: 20,
      dataext: null,
      textMod: textData,
      persData: {
        first_name: "",
        last_name: "",
      },
      textInfo: infoText,
      statusMod: {
        a_module: false,
        b_module: false,
        c_module: false,
        d_module: false,
        e_module: false,
        f_module: false,
        g_module: false,
        h_module: false,
        i_module: false,
        j_module: false,
        k_module: false,
        l_module: false,
        m_module: false,
        n_module: false,
        o_module: false,
      },
    };
  },
  methods: {
    getData() {
      const payload = {
        email: this.email,
      };
      this.loading = true;
      ModuleService.getStatus(payload).then((response) => {
        console.log("data terug");
        this.statusMod = response.data.data.charter;
        this.persData = response.data.data;
        this.loading = false;
      });
    },
    toModule1() {
      this.$router.push({ name: "Module1" });
    },
    toModule2() {
      this.$router.push({ name: "Module2" });
    },
    toModule3() {
      this.$router.push({ name: "Module3" });
    },
    toModule4() {
      this.$router.push({ name: "Module4" });
    },
    toModule5() {
      this.$router.push({ name: "Module5" });
    },
    toModule6() {
      this.$router.push({ name: "Module6" });
    },
    toModule7() {
      this.$router.push({ name: "Module7" });
    },
    toModule8() {
      this.$router.push({ name: "Module8" });
    },
    toModule9() {
      this.$router.push({ name: "Module9" });
    },
    toModule10() {
      this.$router.push({ name: "Module10" });
    },
    toModule11() {
      this.$router.push({ name: "Module11" });
    },
    toModule12() {
      this.$router.push({ name: "Module12" });
    },
    toModule13() {
      this.$router.push({ name: "Module13" });
    },
    toModule14() {
      this.$router.push({ name: "Module14" });
    },
    toModule15() {
      this.$router.push({ name: "Module15" });
    },

    testToken() {
      const payload = {
        email: this.email,
        sl_a: this.sl_a,
      };
      this.error = null;
      AuthService.testtoken(payload).then((response) => {
        this.dataext = response.data;
      });
    },
  },
  computed: {
    ...mapGetters("auth", ["email"]),
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ` + token;
    }

    this.getData();
  },
};
</script>
