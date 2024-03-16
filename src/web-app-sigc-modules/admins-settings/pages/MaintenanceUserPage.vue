<script setup lang="ts">
import { reactive } from 'vue';

import useUserStore from '../stores/useUserStore';
import useAgencyStore from '../stores/useAgencyStore';

import agencyDialogComponent from '../components/agency/agencyDialogComponent.vue';
import userDialogComponent from '../components/user/userDialogComponent.vue';

const { resetAgency } = useAgencyStore();
const { resetUser } = useUserStore();

const dialogAgency = reactive({
  openModal: false,
});
const dialogUser = reactive({
  openModal: false,
});

const openModalAgency = () => {
  resetAgency();
  dialogAgency.openModal = true;
};
const openModalUser = () => {
  resetUser();
  dialogUser.openModal = true;
};
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Mantenimiento</div>
            <div class="text-h6">Usuarios</div>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn color="primary" @click="openModalAgency()">Agencia</q-btn>
        <q-btn color="primary" @click="openModalUser()">Usuario</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div>
    <agencyDialogComponent :dialogAgency="dialogAgency" />
  </div>
  <div>
    <userDialogComponent :dialogUser="dialogUser" />
  </div>
</template>
