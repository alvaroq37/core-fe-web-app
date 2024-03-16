<script setup lang="ts">
import { storeToRefs } from 'pinia';

import useGenderStore from 'src/web-app-sigc-modules/admins-settings/stores/useGenderStore';
import useGenderService from 'src/web-app-sigc-modules/admins-settings/api/gender.service';
import { watch } from 'vue';

const { dataGenderServiceList, dataGenderServiceResponse } = useGenderService();
const dataOperationGenderStore = useGenderStore();
const { storeGenderPersist } = storeToRefs(dataOperationGenderStore);

const props = defineProps({
  dialogGender: {
    type: Object,
    required: true,
  },
});

watch(props.dialogGender, () => {
  dataGenderServiceList();
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
  <q-dialog v-model="$props.dialogGender.openModal">
    <q-card class="my-card">
      <q-card-section>
        <span class="text-h6">Registro de Generos</span>
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
              v-model="storeGenderPersist.description"
              label="Ingrese el genero"
              lazy-rules
              :rules="[
                (val) =>
                  valueDescriptionOccupation(val) || 'Debe ingresar el genero',
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
            label="Registrar genero"
            @click="dataGenderServiceResponse()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
