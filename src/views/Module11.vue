<template>
  <div>
    <Toolbar />
    <div v-if="loading">
      <loading />
    </div>
    <div v-if="saving">
      <saving />
    </div>
    <div class="ma-0 pa-0" v-if="!loading">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="accent d-flex justify-center">
          <v-card class="ma-10 transparent" outlined width="100%">
            <div v-if="memberData.step === 0">
              <h3>
                {{ textIntro[0].header }}
              </h3>
              <br />
              {{ textIntro[0].texta }}
              <br /><br />
              {{ textIntro[0].textb }}
              <br /><br />
              {{ textIntro[0].textc }}
              <br /><br />
              {{ textIntro[0].textd }}
              <br /><br />
              {{ textIntro[0].texte }}
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
              </div>
            </div>
            <div v-if="memberData.step === 1">
              <h3>
                {{ textIntro[1].header }}
              </h3>
              <br />
              {{ textIntro[1].texta }}
              <br /><br />
              {{ textIntro[1].textb }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 2">
              <h3>
                {{ textIntro[2].header }}
              </h3>
              <br />
              {{ textIntro[2].texta }}
              <br /><br />
              {{ textIntro[2].textb }}
              <br /><br />
              {{ textIntro[2].textc }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 3">
              <h3>
                {{ textIntro[3].header }}
              </h3>
              <br />
              {{ textIntro[3].texta }}
              <br /><br />
              {{ textIntro[3].textb }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 4">
              <h3>
                {{ textIntro[4].header }}
              </h3>
              <br />
              {{ textIntro[4].texta }}
              <br /><br />
              {{ textIntro[4].textb }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 5">
              <h3>
                {{ textIntro[5].header }}
              </h3>
              <br />
              {{ textIntro[5].texta }}
              <br /><br />
              {{ textIntro[5].textb }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 6">
              <h3>
                {{ textIntro[6].header }}
              </h3>
              <br />
              {{ textIntro[6].texta }}
              <br /><br />
              {{ textIntro[6].textb }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 7">
              <h3>
                {{ textIntro[7].header }}
              </h3>
              <br />
              {{ textIntro[7].texta }}
              <br /><br />
              {{ textIntro[7].textb }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 8">
              <h3>
                {{ textIntro[8].header }}
              </h3>
              <br />
              {{ textIntro[8].texta }}
              <br /><br />
              {{ textIntro[8].textb }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 9">
              <h3>
                {{ textIntro[9].header }}
              </h3>
              <br />
              {{ textIntro[9].texta }}
              <br /><br />
              {{ textIntro[9].textb }}
              <br /><br />
            </div>
            <div v-if="memberData.step === 10">
              <h3>
                {{ textIntro[10].header }}
              </h3>
              <br />
              {{ textIntro[10].texta }}
              <br /><br />
              {{ textIntro[10].textb }}
              <br /><br />
              {{ textIntro[10].textc }}
              <br /><br />
              {{ textIntro[10].textd }}
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center">
          <v-card class="ma-10 transparent" outlined width="100%">
            <step-text
              :stepText="textIntro[0].header"
              :number="0"
              class="mb-5"
              :kleur="colorStep0"
            />
            <div id="step0" v-if="memberData.step === 0">
              <vimeo-player
                :video-id="vimeo.module_k"
                class="embed-container"
                :options="{ responsive: true }"
              ></vimeo-player>
              <v-row class="mt-10 mb-10">
                <btn-stop :on-click="stopModule" />
                <v-spacer />
                <btnnext :on-click="endStepIntro" />
              </v-row>
            </div>
            <step-text
              :stepText="textIntro[1].header"
              :number="1"
              class="mb-5"
              :kleur="colorStep1"
            />

            <div id="step1" v-if="memberData.step === 1">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[0].statement"
                    :note="Statements[0].note"
                    :comment="Statements[0].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_a" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[1].statement"
                    :note="Statements[1].note"
                    :comment="Statements[1].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_b" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[2].statement"
                    :note="Statements[2].note"
                    :comment="Statements[2].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_c" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[3].statement"
                    :note="Statements[3].note"
                    :comment="Statements[3].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_d" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_a"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepA)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[2].header"
              :number="2"
              class="mb-5"
              :kleur="colorStep2"
            />
            <div id="step2" v-if="memberData.step === 2">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[4].statement"
                    :note="Statements[4].note"
                    :comment="Statements[4].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_e" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[5].statement"
                    :note="Statements[5].note"
                    :comment="Statements[5].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_f" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[6].statement"
                    :note="Statements[6].note"
                    :comment="Statements[6].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_g" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[7].statement"
                    :note="Statements[7].note"
                    :comment="Statements[7].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_h" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_b"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepB)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[3].header"
              :number="3"
              class="mb-5"
              :kleur="colorStep3"
            />
            <div id="step3" v-if="memberData.step === 3">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[8].statement"
                    :note="Statements[8].note"
                    :comment="Statements[8].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_i" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[9].statement"
                    :note="Statements[9].note"
                    :comment="Statements[9].comment"
                  />

                  <ValidationProvider
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <v-radio-group
                      v-model="memberData.question_j"
                      :succes="valid"
                      :error-messages="errors"
                    >
                      <v-radio value="ke1" color="info">
                        <template v-slot:label> Ja </template>
                      </v-radio>
                      <v-radio value="ke2" color="info">
                        <template v-slot:label> Nee </template>
                      </v-radio>
                    </v-radio-group>
                  </ValidationProvider>

                  <div v-if="memberData.question_j === 'ke2'">
                    <CustomDivider />
                    <StatementText
                      :statement="Statements[10].statement"
                      :note="Statements[10].note"
                      :comment="Statements[10].comment"
                    />
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors, valid }"
                    >
                      <v-radio-group
                        v-model="memberData.question_k"
                        :succes="valid"
                        :error-messages="errors"
                      >
                        <v-radio value="ke1" color="info">
                          <template v-slot:label> Ja </template>
                        </v-radio>
                        <v-radio value="ke2" color="info">
                          <template v-slot:label> Nee </template>
                        </v-radio>
                      </v-radio-group>
                    </ValidationProvider>
                  </div>

                  <CustomDivider />
                  <StatementText
                    :statement="Statements[11].statement"
                    :note="Statements[11].note"
                    :comment="Statements[11].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_l" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[12].statement"
                    :note="Statements[12].note"
                    :comment="Statements[12].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_m" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_c"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepC)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[4].header"
              :number="4"
              class="mb-5"
              :kleur="colorStep4"
            />
            <div id="step4" v-if="memberData.step === 4">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[13].statement"
                    :note="Statements[13].note"
                    :comment="Statements[13].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_n" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[14].statement"
                    :note="Statements[14].note"
                    :comment="Statements[14].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_o" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[15].statement"
                    :note="Statements[15].note"
                    :comment="Statements[15].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_p" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[16].statement"
                    :note="Statements[16].note"
                    :comment="Statements[16].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_q" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_d"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepD)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[5].header"
              :number="5"
              class="mb-5"
              :kleur="colorStep5"
            />
            <div id="step5" v-if="memberData.step === 5">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[17].statement"
                    :note="Statements[17].note"
                    :comment="Statements[17].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_r" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[18].statement"
                    :note="Statements[18].note"
                    :comment="Statements[18].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_s" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[19].statement"
                    :note="Statements[19].note"
                    :comment="Statements[19].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_t" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[20].statement"
                    :note="Statements[20].note"
                    :comment="Statements[20].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_u" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[21].statement"
                    :note="Statements[21].note"
                    :comment="Statements[21].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_v" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_e"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepE)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[6].header"
              :number="6"
              class="mb-5"
              :kleur="colorStep6"
            />
            <div id="step6" v-if="memberData.step === 6">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[22].statement"
                    :note="Statements[22].note"
                    :comment="Statements[22].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_w" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[23].statement"
                    :note="Statements[23].note"
                    :comment="Statements[23].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_x" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[24].statement"
                    :note="Statements[24].note"
                    :comment="Statements[24].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_y" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[25].statement"
                    :note="Statements[25].note"
                    :comment="Statements[25].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_z" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_f"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepF)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[7].header"
              :number="7"
              class="mb-5"
              :kleur="colorStep7"
            />
            <div id="step7" v-if="memberData.step === 7">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[26].statement"
                    :note="Statements[26].note"
                    :comment="Statements[26].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_za" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[27].statement"
                    :note="Statements[27].note"
                    :comment="Statements[27].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zb" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[28].statement"
                    :note="Statements[28].note"
                    :comment="Statements[28].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zc" />
                  <StatementText
                    :statement="Statements[29].statement"
                    :note="Statements[29].note"
                    :comment="Statements[29].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zd" />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_g"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepG)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[8].header"
              :number="8"
              class="mb-5"
              :kleur="colorStep8"
            />
            <div id="step8" v-if="memberData.step === 8">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[30].statement"
                    :note="Statements[30].note"
                    :comment="Statements[30].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_ze" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[31].statement"
                    :note="Statements[31].note"
                    :comment="Statements[31].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zf" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[32].statement"
                    :note="Statements[32].note"
                    :comment="Statements[32].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zg" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[33].statement"
                    :note="Statements[33].note"
                    :comment="Statements[33].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zh" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_h"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepH)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[9].header"
              :number="9"
              class="mb-5"
              :kleur="colorStep9"
            />
            <div id="step9" v-if="memberData.step === 9">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[34].statement"
                    :note="Statements[34].note"
                    :comment="Statements[34].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zi" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[35].statement"
                    :note="Statements[35].note"
                    :comment="Statements[35].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zj" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[36].statement"
                    :note="Statements[36].note"
                    :comment="Statements[36].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zk" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[37].statement"
                    :note="Statements[37].note"
                    :comment="Statements[37].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zl" />
                  <CustomDivider />
                  <StatementText
                    :statement="Statements[38].statement"
                    :note="Statements[38].note"
                    :comment="Statements[38].comment"
                  />
                  <ta-slider2 v-model="memberData.sl_zm" />
                  <CustomDivider />
                  <base-val-area
                    label="Uw opmerkingen"
                    rules="max:150"
                    v-model="memberData.remark_i"
                  />
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStepI)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                  <v-row class="mb-10">
                    <btn-stop :on-click="stopModule" />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[10].header"
              :number="10"
              class="mb-5"
              :kleur="colorStep10"
            />
            <div id="step10" v-if="memberData.step === 10">
              <CustomDivider />
              <v-row class="mt-10 mb-10 justify-center">
                <v-btn
                  color="info"
                  x-large
                  :disabled="disableBtn"
                  @click="getReport"
                  >rapportage</v-btn
                >
              </v-row>
              <CustomDivider />
              <v-row class="mt-10 mb-10">
                <btnback :on-click="backStep" />
                <btn-stop :on-click="endModule" />
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Toolbar from "@/components/core/Toolbar";
import textData from "@/text/textK.json";
import vimeoData from "@/text/vimeo.json";
import Loading from "@/components/core/loading";
import TaSlider2 from "@/components/core/ta-slider2";
import StatementService from "@/services/StatementService";
import ResultService from "@/services/ResultService";
import StepText from "@/components/stepText";
import Btnnext from "@/components/BtnNext";
import StatementText from "@/components/StatementText";
import Btnback from "@/components/BtnBack";
import CustomDivider from "@/components/CustomDivider";
import BtnStop from "@/components/BtnStop";
import Saving from "@/components/core/saving";
import { ValidationObserver } from "vee-validate";
import BaseValArea from "@/components/input/BaseValArea";
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    BaseValArea,
    Saving,
    BtnStop,
    CustomDivider,
    Btnback,

    StatementText,
    Btnnext,
    StepText,
    TaSlider2,
    Loading,
    Toolbar,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      disableBtn: false,
      valid1: false,
      valid2: false,
      valid3: false,
      valid4: false,
      colorStep0: "accent",
      colorStep1: "accent",
      colorStep2: "accent",
      colorStep3: "accent",
      colorStep4: "accent",
      colorStep5: "accent",
      colorStep6: "accent",
      colorStep7: "accent",
      colorStep8: "accent",
      colorStep9: "accent",
      colorStep10: "accent",
      colorStep11: "accent",
      colorStep12: "accent",
      stap: 0,
      saving: false,
      loading: false,
      loading1: false,
      error: null,
      kel1: "ja",
      kel2: "nee",
      kel3: "wellicht",
      vimeo: vimeoData,
      dataext: null,
      textIntro: textData,
      memberData: {
        sl_a: null,
        sl_b: null,
        sl_c: null,
        sl_d: null,
        sl_e: null,
        sl_f: null,
        sl_g: null,
        sl_h: null,
        sl_i: null,
        sl_j: null,
        sl_k: null,
        sl_l: null,
        sl_m: null,
        sl_n: null,
        sl_o: null,
        sl_p: null,
        sl_q: null,
        sl_r: null,
        sl_s: null,
        sl_t: null,
        sl_u: null,
        sl_v: null,
        sl_w: null,
        sl_x: null,
        sl_y: null,
        sl_z: null,
        sl_za: null,
        sl_zb: null,
        sl_zc: null,
        sl_zd: null,
        sl_ze: null,
        sl_zf: null,
        sl_zg: null,
        sl_zh: null,
        sl_zi: null,
        sl_zj: null,
        sl_zk: null,
        sl_zl: null,
        sl_zm: null,

        question_j: null,
        question_k: null,
        ready_a: null,
        ready_b: null,
        ready_c: null,
        ready_d: null,
        ready_e: null,
        ready_f: null,
        ready_g: null,
        ready_h: null,
        ready_i: null,
        remark_a: "",
        remark_b: "",
        remark_c: " ",
        remark_d: "",
        remark_e: "",
        remark_f: "",
        remark_g: "",
        remark_i: "",
        remark_j: "",
        remark_k: "",
        remark_l: "",
      },
      persData: {
        first_name: "",
        last_name: "",
      },
      Statements: null,
    };
  },
  methods: {
    async endModule() {
      this.memberData.step = 0;
      await this.saveResults();
      await this.$router.push({ name: "Modules" });
    },

    stopModule() {
      this.$router.push({ name: "Modules" });
    },
    async backStep() {
      await this.$vuetify.goTo(0);
      this.memberData.step--;
    },
    async endStepIntro() {
      await this.$vuetify.goTo(0);
      this.memberData.step++;
    },
    async endStepA() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepB() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepC() {
      if (this.memberData.question_j === "ke1")
        this.memberData.question_k = "ke10";
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepD() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepE() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },

    async endStepF() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepG() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepH() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    async endStepI() {
      await this.$vuetify.goTo(0);
      await this.saveResults();
      this.memberData.step++;
    },
    saveResults() {
      const payload = {
        email: this.email,
        sl_a: this.memberData.sl_a,
        sl_b: this.memberData.sl_b,
        sl_c: this.memberData.sl_c,
        sl_d: this.memberData.sl_d,
        sl_e: this.memberData.sl_e,
        sl_f: this.memberData.sl_f,
        sl_g: this.memberData.sl_g,
        sl_h: this.memberData.sl_h,
        sl_i: this.memberData.sl_i,
        sl_j: this.memberData.sl_j,
        sl_k: this.memberData.sl_k,
        sl_l: this.memberData.sl_l,
        sl_m: this.memberData.sl_m,
        sl_n: this.memberData.sl_n,
        sl_o: this.memberData.sl_o,
        sl_p: this.memberData.sl_p,
        sl_q: this.memberData.sl_q,
        sl_r: this.memberData.sl_r,
        sl_s: this.memberData.sl_s,
        sl_t: this.memberData.sl_t,
        sl_u: this.memberData.sl_u,
        sl_v: this.memberData.sl_v,
        sl_w: this.memberData.sl_w,
        sl_x: this.memberData.sl_x,
        sl_y: this.memberData.sl_y,
        sl_z: this.memberData.sl_z,
        sl_za: this.memberData.sl_za,
        sl_zb: this.memberData.sl_zb,
        sl_zc: this.memberData.sl_zc,
        sl_zd: this.memberData.sl_zd,
        sl_ze: this.memberData.sl_ze,
        sl_zf: this.memberData.sl_zf,
        sl_zg: this.memberData.sl_zg,
        sl_zh: this.memberData.sl_zh,
        sl_zi: this.memberData.sl_zi,
        sl_zj: this.memberData.sl_zj,
        sl_zk: this.memberData.sl_zk,
        sl_zl: this.memberData.sl_zl,
        sl_zm: this.memberData.sl_zm,
        question_j: this.memberData.question_j,
        question_k: this.memberData.question_k,
        ready_a: this.memberData.ready_a,
        ready_b: this.memberData.ready_b,
        ready_c: this.memberData.ready_c,
        ready_d: this.memberData.ready_d,
        ready_e: this.memberData.ready_e,
        ready_f: this.memberData.ready_f,
        ready_g: this.memberData.ready_g,
        ready_h: this.memberData.ready_h,
        ready_i: this.memberData.ready_i,
        step: this.memberData.step,
        remark_a: this.memberData.remark_a,
        remark_b: this.memberData.remark_b,
        remark_c: this.memberData.remark_c,
        remark_d: this.memberData.remark_d,
        remark_e: this.memberData.remark_e,
        remark_f: this.memberData.remark_f,
        remark_g: this.memberData.remark_g,
        remark_h: this.memberData.remark_h,
        remark_i: this.memberData.remark_i,
        remark_j: this.memberData.remark_j,
        remark_k: this.memberData.remark_k,
        remark_l: this.memberData.remark_l,
      };
      this.saving = true;
      ResultService.saveResultK(payload).then(() => {
        console.log("saved answers");
        this.saving = false;
      });
    },

    getReport() {
      const payload = {
        email: this.email,
      };
      this.disableBtn = true;
      // eslint-disable-next-line no-undef
      EventBus.$emit("report", true);
      ResultService.getReportK(payload)
        .then(() => {})
        .finally(() => {
          this.disableBtn = false;
        });
    },

    getStatement() {
      this.loading = true;
      StatementService.getStatementK().then((response) => {
        console.log("statements terug");
        this.Statements = response.data.data;
        this.loading = false;
      });
    },
    getData() {
      const payload = {
        email: this.email,
      };
      this.loading1 = true;
      ResultService.getResultK(payload).then((response) => {
        console.log("dataklant terug");
        this.memberData = response.data.data.klightmodule;
        this.loading1 = false;
      });
    },
  },
  watch: {
    "memberData.step": function () {
      if (this.memberData.step === 0) {
        this.colorStep0 = "info";
      } else if (this.memberData.step === 1) {
        this.colorStep0 = "accent";
        this.colorStep1 = "info";
        this.colorStep2 = "accent";
      } else if (this.memberData.step === 2) {
        this.colorStep1 = "accent";
        this.colorStep2 = "info";
        this.colorStep3 = "accent";
        this.memberData.ready_a = true;
      } else if (this.memberData.step === 3) {
        this.colorStep2 = "accent";
        this.colorStep3 = "info";
        this.colorStep4 = "accent";
        this.memberData.ready_b = true;
      } else if (this.memberData.step === 4) {
        this.colorStep3 = "accent";
        this.colorStep4 = "info";
        this.colorStep5 = "accent";
        this.memberData.ready_c = true;
      } else if (this.memberData.step === 5) {
        this.colorStep4 = "accent";
        this.colorStep5 = "info";
        this.colorStep6 = "accent";
        this.memberData.ready_d = true;
      } else if (this.memberData.step === 6) {
        this.colorStep5 = "accent";
        this.colorStep6 = "info";
        this.colorStep7 = "accent";
        this.memberData.ready_e = true;
      } else if (this.memberData.step === 7) {
        this.colorStep6 = "accent";
        this.colorStep7 = "info";
        this.colorStep8 = "accent";
        this.memberData.ready_f = true;
      } else if (this.memberData.step === 8) {
        this.colorStep7 = "accent";
        this.colorStep8 = "info";
        this.colorStep9 = "accent";
        this.memberData.ready_g = true;
      } else if (this.memberData.step === 9) {
        this.colorStep8 = "accent";
        this.colorStep9 = "info";
        this.colorStep10 = "accent";
        this.memberData.ready_h = true;
        this.memberData.ready_i = true;
      } else if (this.memberData.step === 10) {
        this.colorStep9 = "accent";
        this.colorStep10 = "info";
        this.colorStep11 = "accent";
        this.memberData.ready_i = true;
      } else if (this.memberData.step === 11) {
        this.colorStep10 = "accent";
        this.colorStep11 = "info";
        this.colorStep12 = "accent";
        this.memberData.ready_j = true;
      } else if (this.memberData.step === 12) {
        this.colorStep11 = "accent";
        this.colorStep12 = "info";
        this.colorStep13 = "accent";
        this.memberData.ready_j = true;
      }
    },
  },
  computed: {
    ...mapGetters("auth", ["email"]),
  },
  created() {
    this.getStatement();
    this.getData();
  },
};
</script>
