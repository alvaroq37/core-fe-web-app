<script setup lang="ts">
import { storeToRefs } from 'pinia';

import useOccupationStore from 'src/web-app-sigc-modules/admins-settings/stores/useOccupationStore';
import useClientCategoryStore from 'src/web-app-sigc-modules/admins-settings/stores/useClientCategoryStore';
import useGenderStore from 'src/web-app-sigc-modules/admins-settings/stores/useGenderStore';
import useCityStore from 'src/web-app-sigc-modules/admins-settings/stores/useCityStore';
import useClientStore from 'src/web-app-sigc-modules/admins-settings/stores/useClientStore';

import useOccupationService from 'src/web-app-sigc-modules/admins-settings/api/occupation.service';
import useClientCategoryService from 'src/web-app-sigc-modules/admins-settings/api/client.category.service';
import useGenderService from '../../api/gender.service';
import useCityService from '../../api/city.service';
import useClientService from '../../api/client.service';
import { watch } from 'vue';

const { dataOccupationServiceList } = useOccupationService();
const { dataGenderServiceList } = useGenderService();
const { dataResponseServiceListCity } = useCityService();
const { dataResponseServiceListClientCategory } = useClientCategoryService();
const { dataResponseServiceClient } = useClientService();

const dataOperationOccupationStore = useOccupationStore();
const dataOperationClientCategoryStore = useClientCategoryStore();
const dataOperationGenderStore = useGenderStore();
const dataOperationCityStore = useCityStore();
const dataOperationClientStore = useClientStore();

const { storeCityListResponse } = storeToRefs(dataOperationCityStore);
const { storeClientCategoryListResponse } = storeToRefs(
  dataOperationClientCategoryStore
);
const { storeClientPersist } = storeToRefs(dataOperationClientStore);
const { storeOccupationListResponse } = storeToRefs(
  dataOperationOccupationStore
);
const { storeGenderListResponse } = storeToRefs(dataOperationGenderStore);

const optionsOccupation = storeOccupationListResponse;
const optionsClientCategory = storeClientCategoryListResponse;
const optionsGender = storeGenderListResponse;
const optionsCity = storeCityListResponse;

const props = defineProps({
  dialogClient: {
    type: Object,
    required: true,
  },
});

watch(props.dialogClient, () => {
  dataOccupationServiceList();
  dataGenderServiceList();
  dataResponseServiceListCity();
  dataResponseServiceListClientCategory();
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
  <q-dialog v-model="$props.dialogClient.openModal">
    <q-card class="my-card" style="width: 800px; max-width: 80vw">
      <q-card-section>
        <span class="text-h6">Registro de Clientes</span>
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
              v-model="storeClientPersist.city"
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
              v-model="storeClientPersist.gender"
              :options="optionsGender"
              option-label="description"
              label="Seleccione el genero del cliente"
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
              v-model="storeClientPersist.occupation"
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
              v-model="storeClientPersist.ci"
              label="Ingrese el número de documento"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeClientPersist.names"
              label="Ingrese el nombre del cliente"
              :rules="[
                (val) =>
                  valueUser(val) || 'Debe ingresar el nombre del cliente',
              ]"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeClientPersist.names_paternal"
              label="Ingrese el apellido paterno del cliente"
              :rules="[
                (val) =>
                  valueUser(val) ||
                  'Debe ingresar el apellido paterno del cliente',
              ]"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeClientPersist.names_maternal"
              label="Ingrese el apellido materno del cliente"
              :rules="[
                (val) =>
                  valueUser(val) ||
                  'Debe ingresar el apellido materno del cliente',
              ]"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeClientPersist.address"
              label="Ingrese la dirección del usaurio"
              :rules="[
                (val) =>
                  valueUser(val) || 'Debe ingresar la dirección del cliente',
              ]"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeClientPersist.number_cell_phone"
              label="Ingrese el número de telefono celular"
              type="number"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeClientPersist.number_phone"
              label="Ingrese el número de telefono fijo"
              type="number"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeClientPersist.email"
              label="Ingrese el email del cliente"
              type="email"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              filled
              v-model="storeClientPersist.dateBirth"
              mask="date"
              :rules="['date']"
              label="Ingrese la fecha de nacimiento del cliente"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="storeClientPersist.dateBirth">
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
              v-model="storeClientPersist.client_category"
              :options="optionsClientCategory"
              option-value="id"
              option-label="value"
              label="Seleccione la categoría del cliente"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione una categoria',
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
            label="Registrar Cliente"
            type="submit"
            @click="dataResponseServiceClient()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
