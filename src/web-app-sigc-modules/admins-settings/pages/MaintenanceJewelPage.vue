<script setup lang="ts">
import useJewelStore from '../stores/useJewelStore';
import useMaterialStore from '../stores/useMaterialStore.js';

import jewelDialogComponent from '../components/jewel/jewelDialogComponent.vue';
import jewelMaterialDialogComponent from '../components/jewel-material/jewelMaterialDialogComponent.vue';
import { reactive } from 'vue';

const { resetJewel } = useJewelStore();
const { resetMaterial } = useMaterialStore();

const dialogJewel = reactive({
  openModal: false,
});
const dialogMaterial = reactive({
  openModal: false,
});

const openModalJewel = () => {
  resetJewel();
  dialogJewel.openModal = true;
};
const openModalMaterial = () => {
  resetMaterial();
  dialogMaterial.openModal = true;
};
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Mantenimiento</div>
            <div class="text-h6">Joyas</div>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn color="primary" @click="openModalJewel()">Joya</q-btn>
        <q-btn color="primary" @click="openModalMaterial()">Kilataje</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div>
    <jewelDialogComponent :dialogJewel="dialogJewel" />
  </div>
  <div>
    <jewelMaterialDialogComponent :dialogMaterial="dialogMaterial" />
  </div>
</template>
