import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  Country,
  CountryListResponse,
  CountryMessageResponse,
} from '../interface/country.interface';

const useCountryStore = defineStore('useCountryStore', () => {
  const storeCountryListResponse = ref<CountryListResponse[]>([]);
  const storeCountryPersist = ref<Country>({
    id: 0,
    name: '',
    date_create: new Date(),
    date_update: null,
    user_create: 0,
    user_update: null,
  });

  const storeCountryMessageResponse = ref<CountryMessageResponse>({
    message: '',
  });

  return {
    storeCountryListResponse,
    storeCountryPersist,
    storeCountryMessageResponse,

    getStoreCountryPersist() {
      return computed(() => storeCountryPersist);
    },

    getStoreCountryListResponse() {
      return computed(() => storeCountryListResponse);
    },

    getStoreCountryMessageResponse() {
      return computed(() => storeCountryMessageResponse);
    },

    setStoreCountryPersist(data: Country) {
      storeCountryPersist.value = data;
    },

    setStoreCountryListResponse(data: CountryListResponse[]) {
      storeCountryListResponse.value = data;
    },

    setStoreCountryMessageResponse(data: CountryMessageResponse) {
      storeCountryMessageResponse.value = data;
    },

    resetCountry() {
      storeCountryPersist.value = {
        id: 0,
        name: '',
        date_create: new Date(),
        date_update: null,
        user_create: 0,
        user_update: 0,
      };
    },
  };
});

export default useCountryStore;
