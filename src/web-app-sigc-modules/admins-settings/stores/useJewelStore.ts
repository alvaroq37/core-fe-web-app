import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  Jewel,
  JewelMessageResponse,
  JewelListResponse,
  JewelFindById,
} from '../interface/jewel.interface';

const useJewelStore = defineStore('useJewelStore', () => {
  const storeJewelListResponse = ref<JewelListResponse[]>([]);
  const storeJewelListDetail = ref<JewelListResponse[]>([]);
  const storeJewelResponseFind = ref<JewelListResponse>({
    id: 0,
    jewel: '',
    number_parts: 0,
    jewel_type: 0,
    gross_weight: 0,
    net_weight: 0,
    net_weight_loan: 0,
    description: '',
    date_create: null,
    date_update: null,
    user_create: null,
    user_update: null,
    material: null,
  });
  const storeJewelPersist = ref<Jewel>({
    id: 0,
    jewel: '',
    number_parts: 0,
    jewel_type: 0,
    gross_weight: 0,
    net_weight: 0,
    net_weight_loan: 0,
    description: '',
    date_create: new Date(),
    date_update: null,
    user_create: 0,
    user_update: null,
    material: null,
  });

  const storeJewelMessageResponsePersist = ref<JewelMessageResponse>({
    message: '',
  });

  const storeJewelFindById = ref<JewelFindById>({
    id: '',
  });

  return {
    storeJewelPersist,
    storeJewelMessageResponsePersist,
    storeJewelListResponse,
    storeJewelResponseFind,
    storeJewelFindById,
    storeJewelListDetail,

    getJewelPersist() {
      return computed(() => storeJewelPersist);
    },

    getJewelListResponse() {
      return computed(() => storeJewelListResponse);
    },

    getJewelMessageResponse() {
      return computed(() => storeJewelMessageResponsePersist);
    },

    getJewelFindById() {
      return computed(() => storeJewelFindById);
    },

    setStoreJewelPersist(data: Jewel) {
      storeJewelPersist.value = data;
    },

    setStoreJewelListResponse(data: JewelListResponse[]) {
      storeJewelListResponse.value = data;
    },

    setStoreJewelMessageResponse(data: JewelMessageResponse) {
      storeJewelMessageResponsePersist.value = data;
    },

    setStoreJewelFindById(data: JewelListResponse) {
      storeJewelResponseFind.value = data;
    },

    resetJewel() {
      storeJewelPersist.value = {
        id: 0,
        jewel: '',
        number_parts: 0,
        jewel_type: 0,
        gross_weight: 0,
        net_weight: 0,
        net_weight_loan: 0,
        description: '',
        date_create: new Date(),
        date_update: null,
        user_create: 0,
        user_update: null,
        material: null,
      };
    },

    resetJewelFind() {
      storeJewelResponseFind.value = {
        id: 0,
        jewel: '',
        number_parts: 0,
        jewel_type: 0,
        gross_weight: 0,
        net_weight: 0,
        net_weight_loan: 0,
        description: '',
        date_create: null,
        date_update: null,
        user_create: null,
        user_update: null,
        material: null,
      };
    },

    resetJewelFindById() {
      storeJewelFindById.value = {
        id: '',
      };
    },

    resetJewelListResponse() {
      storeJewelListResponse.value = [];
    },
  };
});

export default useJewelStore;
