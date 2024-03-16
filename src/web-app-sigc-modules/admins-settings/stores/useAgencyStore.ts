import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  Agency,
  AgencyListResponse,
  AgencyMessageResponse,
} from '../interface/agency.interface';

const useAgencyStore = defineStore('useAgencyStore', () => {
  const storeAgencyListResponse = ref<AgencyListResponse[]>([]);
  const storeAgencyPersist = ref<Agency>({
    id: 0,
    address: '',
    name: '',
    city: null,
    dateCreate: new Date(),
    dateUpdate: null,
    user_create: 0,
    userUpdate: null,
  });
  const storeAgencyMessageResponse = ref<AgencyMessageResponse>({
    message: '',
  });

  return {
    storeAgencyListResponse,
    storeAgencyMessageResponse,
    storeAgencyPersist,

    getStoreAgencyPersist() {
      return computed(() => storeAgencyPersist);
    },
    getStoreAgencyListResponse() {
      return computed(() => storeAgencyListResponse);
    },
    getStoreAgencyMessageResponse() {
      return computed(() => storeAgencyMessageResponse);
    },
    setStoreAgencyPersist(data: Agency) {
      storeAgencyPersist.value = data;
    },
    setStoreAgencyListResponse(data: AgencyListResponse[]) {
      storeAgencyListResponse.value = data;
    },
    setStoreAgencyMessageResponse(data: AgencyMessageResponse) {
      storeAgencyMessageResponse.value = data;
    },

    resetAgency() {
      storeAgencyPersist.value = {
        id: 0,
        address: '',
        name: '',
        city: null,
        dateCreate: new Date(),
        dateUpdate: null,
        user_create: 0,
        userUpdate: null,
      };
    },
  };
});

export default useAgencyStore;
