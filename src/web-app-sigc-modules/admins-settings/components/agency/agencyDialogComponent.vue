<script setup lang="ts">
import { storeToRefs } from 'pinia';

import useCityStore from 'src/web-app-sigc-modules/admins-settings/stores/useCityStore';
import useCityService from 'src/web-app-sigc-modules/admins-settings/api/city.service';
import useAgencyStore from 'src/web-app-sigc-modules/admins-settings/stores/useAgencyStore';
import useAgencyService from 'src/web-app-sigc-modules/admins-settings/api/agency.service';
import { watch } from 'vue';

const dataOperationAgencyStore = useAgencyStore();
const dataOperationCityStore = useCityStore();

const { dataResponseServiceAgency } = useAgencyService();
const { dataResponseServiceListCity } = useCityService();

const { storeAgencyPersist } = storeToRefs(dataOperationAgencyStore);
const { storeCityListResponse } = storeToRefs(dataOperationCityStore);

const optionsCity = storeCityListResponse;

const props = defineProps({
  dialogAgency: {
    type: Object,
    required: true,
  },
});

watch(props.dialogAgency, () => {
  dataResponseServiceListCity();
});
const valueMaterial = (data: string) => {
  if (data.length < 0 || data == '') {
    return false;
  }
  return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(
    data
  );
};
</script>

<template>
  <q-dialog v-model="$props.dialogAgency.openModal">
    <q-card class="my-card">
      <q-card-section>
        <span class="text-h6">Registro de Agencia </span>
      </q-card-section>
      <q-separator />

      <q-card-section class="q-pt-none">
        <div class="q-mb-md">
          <q-form
            class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
            style="display: inline-block"
          >
            <q-input
              style="width: 500px; display: inline-block"
              standout
              v-model="storeAgencyPersist.name"
              label="Ingrese el nombre de la agencia"
              lazy-rules
              :rules="[
                (val) => valueMaterial(val) || 'Debe ingresar el nombre',
              ]"
            />

            <q-input
              style="width: 500px; display: inline-block"
              standout
              v-model="storeAgencyPersist.address"
              label="Ingrese la dirección de la agencia"
              lazy-rules
              :rules="[
                (val) => valueMaterial(val) || 'Debe ingresar la dirección',
              ]"
            />

            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeAgencyPersist.city"
              :options="optionsCity"
              option-value="id"
              option-label="name"
              label="Seleccione una ciudad"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione una ciudad',
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
            icon="cancel"
          />
          <q-btn
            class="q-mx-xs"
            push
            color="primary"
            label="Registrar Agencia"
            @click="dataResponseServiceAgency()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
