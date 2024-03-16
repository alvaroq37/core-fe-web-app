import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  Currency,
  CurrencyListResponse,
  CurrencyMessageResponse,
} from '../interface/currency.interface';

const useCurrencyStore = defineStore('useCurrencyStore', () => {
  const storeCurrencyListResponse = ref<CurrencyListResponse[]>([]);
  const storeCurrencyPersist = ref<Currency>({
    id: 0,
    description: '',
    abbreviation: '',
    dateCreate: new Date(),
    dateUpdate: null,
    userCreate: 0,
    userUpdate: null,
  });

  const storeCurrencyMessageResponse = ref<CurrencyMessageResponse>({
    message: '',
  });

  return {
    storeCurrencyListResponse,
    storeCurrencyPersist,
    storeCurrencyMessageResponse,

    getStoreCurrencyPersist() {
      return computed(() => storeCurrencyPersist);
    },

    getStoreCurrencyListResponse() {
      return computed(() => storeCurrencyListResponse);
    },

    getStoreCurrencyMessageResponse() {
      return computed(() => storeCurrencyMessageResponse);
    },

    setStoreCurrencyPersist(data: Currency) {
      storeCurrencyPersist.value = data;
    },

    setStoreCurrencyListResponse(data: CurrencyListResponse[]) {
      storeCurrencyListResponse.value = data;
    },

    setStoreCurrencyMessageResponse(data: CurrencyMessageResponse) {
      storeCurrencyMessageResponse.value = data;
    },

    resetCurrency() {
      storeCurrencyPersist.value = {
        id: 0,
        description: '',
        abbreviation: '',
        dateCreate: new Date(),
        dateUpdate: null,
        userCreate: 0,
        userUpdate: 0,
      };
    },
  };
});

export default useCurrencyStore;
