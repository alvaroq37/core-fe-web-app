<script setup lang="ts">
import { storeToRefs } from 'pinia';

import useOccupationStore from 'src/web-app-sigc-modules/admins-settings/stores/useOccupationStore';
import useOccupationService from 'src/web-app-sigc-modules/admins-settings/api/occupation.service';
import { watch } from 'vue';

const { dataOccupationServiceList, dataOccupationServiceResponse } =
  useOccupationService();
const dataOperationCountryStore = useOccupationStore();
const { storeOccupationPersist } = storeToRefs(dataOperationCountryStore);

const props = defineProps({
  dialogOccupation: {
    type: Object,
    required: true,
  },
});

watch(props.dialogOccupation, () => {
  dataOccupationServiceList();
});

const valueDescriptionOccupation = (data: string) => {
  if (data.length < 0 || data == '') {
    return false;
  }
  return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(
    data
  );
};
</script>

<template>
  <q-dialog v-model="$props.dialogOccupation.openModal">
    <q-card class="my-card">
      <q-card-section>
        <span class="text-h6">Registro de Profesión/Ocupación</span>
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
              v-model="storeOccupationPersist.description"
              label="Ingrese la descripción de la ocupación del cliente"
              lazy-rules
              :rules="[
                (val) =>
                  valueDescriptionOccupation(val) ||
                  'Debe ingresar la ocupación del cliente',
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
            label="Registrar Profesión/Ocupación"
            @click="dataOccupationServiceResponse()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
