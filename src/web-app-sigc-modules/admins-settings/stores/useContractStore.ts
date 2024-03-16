import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  Contract,
  ContractListResponse,
  ContractMessageResponse,
} from '../interface/contract.interface';

const useContractStore = defineStore('useContractStore', () => {
  const storeContractListResponse = ref<ContractListResponse[]>([]);
  const storeContractPersist = ref<Contract>({
    id: 0,
    agency: null,
    currency: null,
    status: false,
    value: 0,
    date_create: new Date(),
    date_expiration: new Date(),
    date_update: null,
    user_create: 0,
    user_update: null,
    business_discount: null,
    client: null,
    jewel: null,
    rate_interest: 0,
  });

  const storeContractMessageResponsePersist = ref<ContractMessageResponse>({
    message: '',
  });

  return {
    storeContractPersist,
    storeContractMessageResponsePersist,
    storeContractListResponse,

    getContractPersist() {
      return computed(() => storeContractPersist);
    },

    getContractListResponse() {
      return computed(() => storeContractListResponse);
    },

    getContractMessageResponse() {
      return computed(() => storeContractMessageResponsePersist);
    },

    setStoreContractPersist(data: Contract) {
      storeContractPersist.value = data;
    },

    setStoreContractListResponse(data: ContractListResponse[]) {
      storeContractListResponse.value = data;
    },

    setStoreContractMessageResponse(data: ContractMessageResponse) {
      storeContractMessageResponsePersist.value = data;
    },

    resetContract() {
      storeContractPersist.value = {
        id: 0,
        agency: null,
        currency: null,
        status: false,
        value: 0,
        date_create: new Date(),
        date_expiration: new Date(),
        date_update: null,
        user_create: 0,
        user_update: null,
        business_discount: null,
        client: null,
        jewel: null,
        rate_interest: 0,
      };
    },
  };
});

export default useContractStore;
