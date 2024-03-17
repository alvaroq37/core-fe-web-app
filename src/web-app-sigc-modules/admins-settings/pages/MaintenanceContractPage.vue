<script setup lang="ts">
import { reactive } from 'vue';

import useContractStore from 'src/web-app-sigc-modules/admins-settings/stores/useContractStore';
import useBusinessDiscountStore from 'src/web-app-sigc-modules/admins-settings/stores/useBusinessDiscountStore';
import useCurrencyStore from 'src/web-app-sigc-modules/admins-settings/stores/useCurrencyStore';
import useClientStore from 'src/web-app-sigc-modules/admins-settings/stores/useClientStore';
import useJewelStore from 'src/web-app-sigc-modules/admins-settings/stores/useJewelStore';

import contractDialogComponent from '../components/contract/contractDialogComponent.vue';
import businessDiscountDialogComponent from '../components/business-discount/businessDiscountDialogComponent.vue';
import currencyDialogComponent from '../components/currency/currencyDialogComponent.vue';

const { resetBusinessDiscount } = useBusinessDiscountStore();
const { resetContract } = useContractStore();
const { resetCurrency } = useCurrencyStore();
const { resetClientFind, resetFindByCi, resetFindByNames } = useClientStore();
const { resetJewel, resetJewelFind, resetJewelFindById } = useJewelStore();

const dialogContract = reactive({
  openModal: false,
});
const dialogBusinessDiscount = reactive({
  openModal: false,
});
const dialogCurrency = reactive({
  openModal: false,
});

const openModalContract = () => {
  resetJewel();
  resetJewelFind();
  resetJewelFindById();
  resetFindByCi();
  resetFindByNames();
  resetClientFind();
  resetContract();
  dialogContract.openModal = true;
};
const openModalBusinessDiscount = () => {
  resetBusinessDiscount();
  dialogBusinessDiscount.openModal = true;
};
const openModalCurrency = () => {
  resetCurrency();
  dialogCurrency.openModal = true;
};
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Mantenimiento</div>
            <div class="text-h6">Contrato</div>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn color="primary" @click="openModalContract()">Contrato</q-btn>
        <q-btn color="primary" @click="openModalCurrency()">Moneda</q-btn>
        <q-btn color="primary" @click="openModalBusinessDiscount()"
          >Descuentos</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
  <div>
    <contractDialogComponent :dialogContract="dialogContract" />
  </div>
  <div>
    <businessDiscountDialogComponent :dialogBusiness="dialogBusinessDiscount" />
  </div>
  <div>
    <currencyDialogComponent :dialogCurrency="dialogCurrency" />
  </div>
</template>
