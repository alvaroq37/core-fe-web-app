<script setup lang="ts">
import { storeToRefs } from 'pinia';

import useCountryStore from 'src/web-app-sigc-modules/admins-settings/stores/useCountryStore';
import useDepartmentStore from 'src/web-app-sigc-modules/admins-settings/stores/useDepartmentStore';
import useCountryService from 'src/web-app-sigc-modules/admins-settings/api/country.service';
import useDepartmentService from '../../api/department.service';
import { watch } from 'vue';

const { dataResponseServiceListCountry } = useCountryService();
const { dataResponseServiceDepartment } = useDepartmentService();

const dataOperationCountryStore = useCountryStore();
const dataOperationDepartmentStore = useDepartmentStore();

const { storeCountryListResponse } = storeToRefs(dataOperationCountryStore);
const { storeDepartmentPersist } = storeToRefs(dataOperationDepartmentStore);

const optionsCountry = storeCountryListResponse;

const props = defineProps({
  dialogDepartment: {
    type: Object,
    required: true,
  },
});

watch(props.dialogDepartment, () => {
  dataResponseServiceListCountry();
});

const valueNameDepartment = (data: string) => {
  if (data.length < 0 || data == '') {
    return false;
  }
  return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(
    data
  );
};
</script>

<template>
  <q-dialog v-model="$props.dialogDepartment.openModal">
    <q-card class="my-card">
      <q-card-section>
        <span class="text-h6">Registro de Departamentos</span>
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
              v-model="storeDepartmentPersist.country"
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
            <q-input
              style="width: 500px; display: inline-block"
              standout
              v-model="storeDepartmentPersist.name"
              label="Ingrese el nombre del departamento"
              lazy-rules
              :rules="[
                (val) =>
                  valueNameDepartment(val) ||
                  'Debe ingresar el nombre del departamento',
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
            label="Registrar Departamento"
            @click="dataResponseServiceDepartment()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
