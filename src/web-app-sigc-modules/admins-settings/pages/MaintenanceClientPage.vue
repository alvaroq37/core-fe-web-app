<script setup lang="ts">
import { reactive } from 'vue';

import useOccupationStore from 'src/web-app-sigc-modules/admins-settings/stores/useOccupationStore';
import useClientStore from 'src/web-app-sigc-modules/admins-settings/stores/useClientStore';
import useGenderStore from 'src/web-app-sigc-modules/admins-settings/stores/useGenderStore';
import useClientCategoryStore from 'src/web-app-sigc-modules/admins-settings/stores/useClientCategoryStore';

import genderDialogComponent from 'src/web-app-sigc-modules/admins-settings/components/gender/genderDialogComponent.vue';
import occupationDialogComponent from 'src/web-app-sigc-modules/admins-settings/components/occupation/occupationDialogComponent.vue';
import clientDialogComponent from 'src/web-app-sigc-modules/admins-settings/components/client/clientDialogComponent.vue';
import clientCategoryDialogComponent from 'src/web-app-sigc-modules/admins-settings/components/client-category/clientCategoryDialogComponent.vue';

const { resetOccupation } = useOccupationStore();
const { resetGender } = useGenderStore();
const { resetClient } = useClientStore();
const { resetClientCategory } = useClientCategoryStore();

const dialogOccupation = reactive({
  openModal: false,
});
const dialogGender = reactive({
  openModal: false,
});
const dialogClient = reactive({
  openModal: false,
});
const dialogCategory = reactive({
  openModal: false,
});

const openModalOccupation = () => {
  resetOccupation();
  dialogOccupation.openModal = true;
};
const openModalGender = () => {
  resetGender();
  dialogGender.openModal = true;
};
const openModalClient = () => {
  resetClient();
  dialogClient.openModal = true;
};
const openModalClientCategory = () => {
  resetClientCategory();
  dialogCategory.openModal = true;
};
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Mantenimiento</div>
            <div class="text-h6">Clientes</div>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn color="primary" @click="openModalClient()">Cliente</q-btn>
        <q-btn color="primary" @click="openModalClientCategory()"
          >Categoria - Cliente</q-btn
        >
        <q-btn color="primary" @click="openModalOccupation()">Ocupación</q-btn>
        <q-btn color="primary" @click="openModalGender()">Genero</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div>
    <occupationDialogComponent :dialogOccupation="dialogOccupation" />
  </div>
  <div>
    <genderDialogComponent :dialogGender="dialogGender" />
  </div>
  <div>
    <clientDialogComponent :dialogClient="dialogClient" />
  </div>
  <div>
    <clientCategoryDialogComponent :dialogCategory="dialogCategory" />
  </div>
</template>
