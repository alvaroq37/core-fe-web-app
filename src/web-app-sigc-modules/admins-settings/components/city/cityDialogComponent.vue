<script setup lang="ts">
import { storeToRefs } from 'pinia';

import useCountryStore from 'src/web-app-sigc-modules/admins-settings/stores/useCountryStore';
import useDepartmentStore from 'src/web-app-sigc-modules/admins-settings/stores/useDepartmentStore';
import useCityStore from 'src/web-app-sigc-modules/admins-settings/stores/useCityStore';

import useCountryService from 'src/web-app-sigc-modules/admins-settings/api/country.service';
import useDepartmentService from '../../api/department.service';
import useCityService from '../../api/city.service';
import { watch } from 'vue';

const { dataResponseServiceListCountry } = useCountryService();
const { dataResponseServiceListDepartment } = useDepartmentService();
const { dataResponseServiceCity } = useCityService();

const dataOperationCountryStore = useCountryStore();
const dataOperationDepartmentStore = useDepartmentStore();
const dataOperationCityStore = useCityStore();

const { storeCityPersist } = storeToRefs(dataOperationCityStore);
const { storeCountryListResponse } = storeToRefs(dataOperationCountryStore);
const { storeDepartmentListResponse } = storeToRefs(
  dataOperationDepartmentStore
);

const optionsCountry = storeCountryListResponse;
const optionsDepartment = storeDepartmentListResponse;

const props = defineProps({
  dialogCity: {
    type: Object,
    required: true,
  },
});

watch(props.dialogCity, () => {
  dataResponseServiceListCountry();
  dataResponseServiceListDepartment();
});

const valueNameCity = (data: string) => {
  if (data.length < 0 || data == '') {
    return false;
  }
  return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(
    data
  );
};
</script>

<template>
  <q-dialog v-model="$props.dialogCity.openModal">
    <q-card class="my-card">
      <q-card-section>
        <span class="text-h6">Registro de Ciudades</span>
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
              v-model="storeCityPersist.country"
              :options="optionsCountry"
              option-value="id"
              option-label="name"
              label="Seleccione el pais"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione un país',
              ]"
            />

            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeCityPersist.department"
              :options="optionsDepartment"
              option-label="name"
              label="Seleccione el departamento"
              option-value="id"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione un departamento',
              ]"
            />
            <q-input
              style="width: 500px; display: inline-block"
              standout
              v-model="storeCityPersist.name"
              label="Ingrese el nombre de la ciudad"
              :rules="[
                (val) =>
                  valueNameCity(val) || 'Debe ingresar el nombre de la ciudad',
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
            label="Registrar Ciudad"
            type="submit"
            @click="dataResponseServiceCity()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
