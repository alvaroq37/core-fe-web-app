<script setup lang="ts">
import { reactive } from 'vue';

import useCountryStore from 'src/web-app-sigc-modules/admins-settings/stores/useCountryStore';
import useDepartmentStore from 'src/web-app-sigc-modules/admins-settings/stores/useDepartmentStore';
import useCityStore from 'src/web-app-sigc-modules/admins-settings/stores/useCityStore';

import cityDialogComponent from 'src/web-app-sigc-modules/admins-settings/components/city/cityDialogComponent.vue';
import countryDialogComponent from 'src/web-app-sigc-modules/admins-settings/components/country/countryDialogComponent.vue';
import departmentDialogComponent from 'src/web-app-sigc-modules/admins-settings/components/department/departmentDialogComponent.vue';

const { resetCountry } = useCountryStore();
const { resetDepartment } = useDepartmentStore();
const { resetCity } = useCityStore();
const dialogCountry = reactive({
  openModal: false,
});
const dialogCity = reactive({
  openModal: false,
});
const dialogDepartment = reactive({
  openModal: false,
});

const openModalCountry = () => {
  resetCountry();
  dialogCountry.openModal = true;
};
const openModalDepartment = () => {
  resetDepartment();
  dialogDepartment.openModal = true;
};
const openModalCity = () => {
  resetCity();
  dialogCity.openModal = true;
};
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Mantenimiento</div>
            <div class="text-h6">Pais - Departamento - Ciudad</div>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn color="primary" @click="openModalCountry()">Pais</q-btn>
        <q-btn color="primary" @click="openModalDepartment()"
          >Departamento</q-btn
        >

        <q-btn color="primary" @click="openModalCity()">Ciudad</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div>
    <countryDialogComponent :dialogCountry="dialogCountry" />
  </div>
  <div>
    <departmentDialogComponent :dialogDepartment="dialogDepartment" />
  </div>
  <div>
    <cityDialogComponent :dialogCity="dialogCity" />
  </div>
</template>
