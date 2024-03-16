<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

import useBusinessDiscountStore from '../../stores/useBusinessDiscountStore';
import useClientStore from '../../stores/useClientStore';
import useAgencyStore from '../../stores/useAgencyStore';
import useJewelStore from '../../stores/useJewelStore';
import useCurrencyStore from '../../stores/useCurrencyStore';
import useContractStore from '../../stores/useContractStore';

import useBusinessDiscountService from '../../api/businessDiscount.service';
import useClientService from '../../api/client.service';
import useAgencyService from '../../api/agency.service';
import useJewelService from '../../api/jewel.service';
import useCurrencyService from '../../api/currency.service';
import useContractService from '../../api/contract.service';

const { dataResponseServiceListBusinessDiscount } =
  useBusinessDiscountService();
const { dataResponseServiceListClient } = useClientService();
const { dataResponseServiceListAgency } = useAgencyService();
const { dataResponseServiceListJewel } = useJewelService();
const { dataResponseServiceListCurrency } = useCurrencyService();
const { dataResponseServiceContract } = useContractService();

const dataOperationBusinessDiscountStore = useBusinessDiscountStore();
const dataOperationAgencyStore = useAgencyStore();
const dataOperationClientStore = useClientStore();
const dataOperationJewelStore = useJewelStore();
const dataOperationCurrencyStore = useCurrencyStore();
const dataOperationContractStore = useContractStore();

const { storeBusinessDiscountListResponse } = storeToRefs(
  dataOperationBusinessDiscountStore
);
const { storeAgencyListResponse } = storeToRefs(dataOperationAgencyStore);
const { storeClientListResponse } = storeToRefs(dataOperationClientStore);
const { storeJewelListResponse } = storeToRefs(dataOperationJewelStore);
const { storeCurrencyListResponse } = storeToRefs(dataOperationCurrencyStore);
const { storeContractPersist } = storeToRefs(dataOperationContractStore);

const optionsBusinessDiscount = storeBusinessDiscountListResponse;
const optionsAgency = storeAgencyListResponse;
const optionsClient = storeClientListResponse;
const optionsJewel = storeJewelListResponse;
const optionsCurrency = storeCurrencyListResponse;

const props = defineProps({
  dialogContract: {
    type: Object,
    required: true,
  },
});

watch(props.dialogContract, () => {
  dataResponseServiceListAgency();
  dataResponseServiceListBusinessDiscount();
  dataResponseServiceListClient();
  dataResponseServiceListCurrency();
  dataResponseServiceListJewel();
});
</script>

<template>
  <q-dialog v-model="$props.dialogContract.openModal">
    <q-card class="my-card" style="width: 800px; max-width: 80vw">
      <q-card-section>
        <span class="text-h6">Registro de Contrato</span>
      </q-card-section>
      <q-separator />

      <q-card-section class="q-pt-none">
        <div class="q-mb-md">
          <q-form
            class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
            style="display: inline-block"
          >
            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeContractPersist.client"
              :options="optionsClient"
              option-value="id"
              option-label="names"
              label="Seleccione el cliente"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione un cliente',
              ]"
            />

            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeContractPersist.business_discount"
              :options="optionsBusinessDiscount"
              option-value="id"
              option-label="description"
              label="Seleccione los descuentos del contrato"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione un descuento',
              ]"
            />

            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeContractPersist.jewel"
              :options="optionsJewel"
              option-value="id"
              option-label="jewel"
              label="Seleccione la joya"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione una joya',
              ]"
            />

            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeContractPersist.currency"
              :options="optionsCurrency"
              option-value="id"
              option-label="description"
              label="Seleccione la moneda del contrato"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione un cliente',
              ]"
            />

            <q-select
              style="width: 250px; display: inline-block"
              standout
              v-model="storeContractPersist.agency"
              :options="optionsAgency"
              option-label="name"
              label="Seleccione la agencia"
              option-value="id"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Por favor seleccione una agencia',
              ]"
            />
            <q-input
              style="width: 500px; display: inline-block"
              standout
              v-model="storeContractPersist.rate_interest"
              label="Ingrese el interes del contrato"
              type="number"
            />
            <q-input
              style="width: 500px; display: inline-block"
              standout
              v-model="storeContractPersist.value"
              label="Ingrese el valor total del contrato"
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
            icon="card_giftcard"
          />
          <q-btn
            class="q-mx-xs"
            push
            color="primary"
            label="Registrar Contrato"
            type="submit"
            @click="dataResponseServiceContract()"
            icon="card_giftcard"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
