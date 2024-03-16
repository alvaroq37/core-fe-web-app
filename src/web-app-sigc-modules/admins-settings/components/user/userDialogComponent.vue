<script setup lang="ts">
import { storeToRefs } from 'pinia';

import useOccupationStore from 'src/web-app-sigc-modules/admins-settings/stores/useOccupationStore';
import useGenderStore from 'src/web-app-sigc-modules/admins-settings/stores/useGenderStore';
import useCityStore from 'src/web-app-sigc-modules/admins-settings/stores/useCityStore';
import useAgencyStore from 'src/web-app-sigc-modules/admins-settings/stores/useAgencyStore';
import useUserStore from 'src/web-app-sigc-modules/admins-settings/stores/useUserStore';

import useOccupationService from 'src/web-app-sigc-modules/admins-settings/api/occupation.service';
import useGenderService from '../../api/gender.service';
import useCityService from '../../api/city.service';
import useAgencyService from '../../api/agency.service';
import useUserService from '../../api/user.service';
import { watch } from 'vue';

const { dataOccupationServiceList } = useOccupationService();
const { dataGenderServiceList } = useGenderService();
const { dataResponseServiceListCity } = useCityService();
const { dataResponseServiceListAgency } = useAgencyService();
const { dataResponseServiceUser } = useUserService();

const dataOperationOccupationStore = useOccupationStore();
const dataOperationGenderStore = useGenderStore();
const dataOperationCityStore = useCityStore();
const dataOperationAgencyStore = useAgencyStore();
const dataOperationUserStore = useUserStore();

const { storeCityListResponse } = storeToRefs(dataOperationCityStore);
const { storeAgencyListResponse } = storeToRefs(dataOperationAgencyStore);
const { storeUserPersist } = storeToRefs(dataOperationUserStore);
const { storeOccupationListResponse } = storeToRefs(
  dataOperationOccupationStore
);
const { storeGenderListResponse } = storeToRefs(dataOperationGenderStore);

const optionsOccupation = storeOccupationListResponse;
const optionsGender = storeGenderListResponse;
const optionsCity = storeCityListResponse;
const optionsAgency = storeAgencyListResponse;

const props = defineProps({
  dialogUser: {
    type: Object,
    required: true,
  },
});

watch(props.dialogUser, () => {
  dataOccupationServiceList();
  dataGenderServiceList();
  dataResponseServiceListCity();
  dataResponseServiceListAgency();
});

const valueUser = (data: string) => {
  if (data.length < 0 || data == '') {
    return false;
  }
  return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(
    data
  );
};
</script>
<template>
  <q-dialog v-model="$props.dialogUser.openModal">
    <q-card class="my-card" style="width: 800px; max-width: 80vw">
      <q-card-section>
        <span class="text-h6">Registro de Usuarios</span>
      </q-card-section>
      <q-separator />

      <q-card-section class="q-pt-none">
        <div class="q-mb-md">
          <q-form
            class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
            style="display: inline-block"
          >
            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.city"
              :options="optionsCity"
              option-value="id"
              option-label="name"
              label="Seleccione la ciudad"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione una ciudad',
              ]"
            />

            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.gender"
              :options="optionsGender"
              option-label="description"
              label="Seleccione el genero del usuario"
              option-value="id"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione un genero',
              ]"
            />
            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.occupation"
              :options="optionsOccupation"
              option-label="description"
              label="Seleccione la ocupación"
              option-value="id"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione una ocupación',
              ]"
            />
            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.ci"
              label="Ingrese el número de documento"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.names"
              label="Ingrese el nombre del cliente"
              :rules="[
                (val) =>
                  valueUser(val) || 'Debe ingresar el nombre del usuario',
              ]"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.lastNamesPaternal"
              label="Ingrese el apellido paterno del usuario"
              :rules="[
                (val) =>
                  valueUser(val) ||
                  'Debe ingresar el apellido paterno del usuario',
              ]"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.lastNamesMaternal"
              label="Ingrese el apellido materno del usuario"
              :rules="[
                (val) =>
                  valueUser(val) ||
                  'Debe ingresar el apellido materno del usuario',
              ]"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.address"
              label="Ingrese la dirección del usaurio"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.cellPhone"
              label="Ingrese el número de telefono celular"
              type="number"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.phone"
              label="Ingrese el número de telefono fijo"
              type="number"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.email"
              label="Ingrese el email corporativo del usuario"
              type="email"
            />

            <q-input
              filled
              style="width: 250px; display: inline-block"
              v-model="storeUserPersist.dateBirth"
              mask="date"
              :rules="['date']"
              label="Ingrese la fecha de nacimiento del usuario"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="storeUserPersist.dateBirth">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeUserPersist.agency"
              :options="optionsAgency"
              option-label="name"
              label="Seleccione una agencia"
              option-value="id"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione una agencia',
              ]"
            />
          </q-form>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <div class="row q-mb-md justify-center">
          <q-btn
            v-close-popup
            class="q-mx-xs"
            push
            color="white"
            text-color="primary"
            label="Cancelar"
            icon="card_giftcard"
          />
          <q-btn
            class="q-mx-xs"
            push
            color="primary"
            label="Registrar Usuario"
            type="submit"
            @click="dataResponseServiceUser()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
