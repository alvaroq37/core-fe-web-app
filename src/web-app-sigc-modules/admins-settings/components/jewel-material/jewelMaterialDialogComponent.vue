<script setup lang="ts">
import { storeToRefs } from 'pinia';

import useMaterialStore from 'src/web-app-sigc-modules/admins-settings/stores/useMaterialStore';
import useMaterialService from 'src/web-app-sigc-modules/admins-settings/api/material.service';
import { watch } from 'vue';

const { dataResponseServiceMaterial, dataResponseServiceListMaterial } =
  useMaterialService();
const dataOperationMaterialStore = useMaterialStore();
const { storeMaterialPersist } = storeToRefs(dataOperationMaterialStore);

const props = defineProps({
  dialogMaterial: {
    type: Object,
    required: true,
  },
});

watch(props.dialogMaterial, () => {
  dataResponseServiceListMaterial();
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
  <q-dialog v-model="$props.dialogMaterial.openModal">
    <q-card class="my-card">
      <q-card-section>
        <span class="text-h6">Registro de Kilataje</span>
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
              v-model="storeMaterialPersist.description"
              label="Ingrese la descripción del material"
              lazy-rules
              :rules="[
                (val) =>
                  valueMaterial(val) ||
                  'Debe ingresar la descripción del material',
              ]"
            />
            <q-input
              style="width: 500px; display: inline-block"
              standout
              v-model="storeMaterialPersist.price"
              label="Ingrese el valor del material"
              type="number"
            />
            <q-input
              style="width: 500px; display: inline-block"
              standout
              v-model="storeMaterialPersist.karat"
              label="Ingrese el kilataje"
              type="number"
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
            label="Registrar Kilataje"
            @click="dataResponseServiceMaterial()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
