<script setup lang="ts">
import { storeToRefs } from 'pinia';

import useBusinessDiscountStore from 'src/web-app-sigc-modules/admins-settings/stores/useBusinessDiscountStore';
import useBusinessDiscountService from 'src/web-app-sigc-modules/admins-settings/api/businessDiscount.service';
import { watch } from 'vue';

const {
  dataResponseServiceBusinessDiscount,
  dataResponseServiceListBusinessDiscount,
} = useBusinessDiscountService();
const dataOperationBusinessDiscountStore = useBusinessDiscountStore();
const { storeBusinessDiscountPersist } = storeToRefs(
  dataOperationBusinessDiscountStore
);

const props = defineProps({
  dialogBusiness: {
    type: Object,
    required: true,
  },
});

watch(props.dialogBusiness, () => {
  dataResponseServiceListBusinessDiscount();
});
const valueDescription = (data: string) => {
  if (data.length < 0 || data == '') {
    return false;
  }
  return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(
    data
  );
};
</script>

<template>
  <q-dialog v-model="$props.dialogBusiness.openModal">
    <q-card class="my-card">
      <q-card-section>
        <span class="text-h6">Registro de Descuentos</span>
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
              v-model="storeBusinessDiscountPersist.description"
              label="Ingrese la descripción del descuento"
              lazy-rules
              :rules="[
                (val) =>
                  valueDescription(val) ||
                  'Debe ingresar la descripción del descuento',
              ]"
            />
            <q-input
              style="width: 500px; display: inline-block"
              standout
              v-model="storeBusinessDiscountPersist.value"
              label="Ingrese el valor del descuento"
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
            label="Registrar Descuento"
            @click="dataResponseServiceBusinessDiscount()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
