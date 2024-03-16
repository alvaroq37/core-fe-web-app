import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  Material,
  MaterialListResponse,
  MaterialMessageResponse,
} from '../interface/material.interface';

const useMaterialStore = defineStore('useMaterialStore', () => {
  const storeMaterialListResponse = ref<MaterialListResponse[]>([]);
  const storeMaterialPersist = ref<Material>({
    id: 0,
    description: '',
    karat: 0,
    price: 0,
    status: false,
    date_create: new Date(),
    date_update: null,
    user_create: 0,
    user_update: null,
  });

  const storeMaterialMessageResponsePersist = ref<MaterialMessageResponse>({
    message: '',
  });

  return {
    storeMaterialPersist,
    storeMaterialMessageResponsePersist,
    storeMaterialListResponse,

    getMaterialPersist() {
      return computed(() => storeMaterialPersist);
    },

    getMaterialListResponse() {
      return computed(() => storeMaterialListResponse);
    },

    getMaterialMessageResponse() {
      return computed(() => storeMaterialMessageResponsePersist);
    },

    setStoreMaterialPersist(data: Material) {
      storeMaterialPersist.value = data;
    },

    setStoreMaterialListResponse(data: MaterialListResponse[]) {
      storeMaterialListResponse.value = data;
    },

    setStoreMaterialMessageResponse(data: MaterialMessageResponse) {
      storeMaterialMessageResponsePersist.value = data;
    },

    resetMaterial() {
      storeMaterialPersist.value = {
        id: 0,
        description: '',
        karat: 0,
        price: 0,
        status: true,
        date_create: new Date(),
        date_update: null,
        user_create: 0,
        user_update: 0,
      };
    },
  };
});

export default useMaterialStore;
