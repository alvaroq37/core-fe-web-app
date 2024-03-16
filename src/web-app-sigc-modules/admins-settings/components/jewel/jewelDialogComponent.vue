<script setup lang="ts">
import { storeToRefs } from 'pinia';

import useMaterialStore from 'src/web-app-sigc-modules/admins-settings/stores/useMaterialStore';
import useMaterialService from 'src/web-app-sigc-modules/admins-settings/api/material.service';
import useJewelStore from 'src/web-app-sigc-modules/admins-settings/stores/useJewelStore';
import useJewelService from 'src/web-app-sigc-modules/admins-settings/api/jewel.service';
import { watch } from 'vue';

const dataOperationMaterialStore = useMaterialStore();
const dataOperationJewelStore = useJewelStore();

const { dataResponseServiceListMaterial } = useMaterialService();
const { dataResponseServiceJewel } = useJewelService();

const { storeJewelPersist } = storeToRefs(dataOperationJewelStore);
const { storeMaterialListResponse } = storeToRefs(dataOperationMaterialStore);

const optionsMaterial = storeMaterialListResponse;

const props = defineProps({
  dialogJewel: {
    type: Object,
    required: true,
  },
});

watch(props.dialogJewel, () => {
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
  <q-dialog v-model="$props.dialogJewel.openModal">
    <q-card class="my-card" style="width: 800px; max-width: 80vw">
      <q-card-section>
        <span class="text-h6">Registro de Joyas</span>
      </q-card-section>
      <q-separator />

      <q-card-section class="q-pt-none">
        <div class="q-mb-md">
          <q-form
            class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
            style="display: inline-block"
          >
            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeJewelPersist.jewel"
              label="Ingrese la joya"
              lazy-rules
              :rules="[(val) => valueMaterial(val) || 'Debe ingresar la joya']"
            />
            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeJewelPersist.material"
              :options="optionsMaterial"
              option-value="id"
              option-label="description"
              label="Seleccione el material de la joya"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione un material',
              ]"
            />
            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeJewelPersist.description"
              label="Ingrese la descripción de la joya"
              lazy-rules
              :rules="[
                (val) =>
                  valueMaterial(val) ||
                  'Debe ingresar la descripción de la joya',
              ]"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeJewelPersist.jewel_type"
              label="Ingrese el tipo de joya"
              type="number"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeJewelPersist.number_parts"
              label="Ingrese el número de partes"
              type="number"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeJewelPersist.gross_weight"
              label="Ingrese el peso bruto de la joya"
              type="number"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeJewelPersist.net_weight"
              label="Ingrese el peso neto de la joya"
              lazy-rules
              type="number"
            />

            <q-input
              style="width: 250px; display: inline-block"
              standout
              v-model="storeJewelPersist.net_weight_loan"
              label="Ingrese el peso neto de préstamo de la joya"
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
            label="Registrar Joya"
            @click="dataResponseServiceJewel()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
