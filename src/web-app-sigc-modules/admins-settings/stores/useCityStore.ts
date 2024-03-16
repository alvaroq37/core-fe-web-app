import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  City,
  CityListResponse,
  CityMessageResponse,
} from '../interface/city.interface';

const useCityStore = defineStore('useCityStore', () => {
  const storeCityListResponse = ref<CityListResponse[]>([]);
  const storeCityPersist = ref<City>({
    id: 0,
    name: '',
    date_create: new Date(),
    date_update: null,
    user_create: 0,
    user_update: 0,
    country: null,
    department: null,
  });
  const storeCityMessageResponse = ref<CityMessageResponse>({
    message: '',
  });

  return {
    storeCityListResponse,
    storeCityPersist,
    storeCityMessageResponse,

    getStoreCityPersist() {
      return computed(() => storeCityPersist);
    },
    getStoreCityListResponse() {
      return computed(() => storeCityListResponse);
    },
    getStoreCityMessageResponse() {
      return computed(() => storeCityMessageResponse);
    },
    setStoreCityPersist(data: City) {
      storeCityPersist.value = data;
    },
    setStoreCityListResponse(data: CityListResponse[]) {
      storeCityListResponse.value = data;
    },
    setStoreCityMessageResponse(data: CityMessageResponse) {
      storeCityMessageResponse.value = data;
    },

    resetCity() {
      storeCityPersist.value = {
        id: 0,
        date_create: new Date(),
        date_update: null,
        name: '',
        user_create: 0,
        user_update: 0,
        country: null,
        department: null,
      };
    },
  };
});

export default useCityStore;
