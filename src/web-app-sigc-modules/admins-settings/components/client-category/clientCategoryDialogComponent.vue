<script setup lang="ts">
import { storeToRefs } from 'pinia';

import useClientCategoryStore from 'src/web-app-sigc-modules/admins-settings/stores/useClientCategoryStore';

import useClientCategoryService from 'src/web-app-sigc-modules/admins-settings/api/client.category.service';
import { watch } from 'vue';

const {
  dataResponseServiceClientCategory,
  dataResponseServiceListClientCategory,
} = useClientCategoryService();
const dataOperationClientCategoryStore = useClientCategoryStore();
const { storeClientCategoryPersist } = storeToRefs(
  dataOperationClientCategoryStore
);

const props = defineProps({
  dialogCategory: {
    type: Object,
    required: true,
  },
});

watch(props.dialogCategory, () => {
  dataResponseServiceListClientCategory();
});

const valueCategory = (data: string) => {
  if (data.length < 0 || data == '') {
    return false;
  }
  return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(
    data
  );
};
</script>

<template>
  <q-dialog v-model="$props.dialogCategory.openModal">
    <q-card class="my-card">
      <q-card-section>
        <span class="text-h6">Registro de Categoría de Cliente</span>
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
              v-model="storeClientCategoryPersist.description"
              label="Ingrese la descripción de la categoría"
              lazy-rules
              :rules="[
                (val) => valueCategory(val) || 'Debe ingresar la descripción',
              ]"
            />
            <q-input
              style="width: 500px; display: inline-block"
              standout
              v-model="storeClientCategoryPersist.value"
              label="Ingrese el valor de la categoría"
              lazy-rules
              :rules="[
                (val) => valueCategory(val) || 'Debe ingresar la categoría',
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
            label="Registrar Categoria"
            @click="dataResponseServiceClientCategory()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
