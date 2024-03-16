import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  Gender,
  GenderListResponse,
  GenderMessageResponse,
} from '../interface/gender.interface';

const useGenderStore = defineStore('useGenderStore', () => {
  const storeGenderListResponse = ref<GenderListResponse[]>([]);
  const storeGenderPersist = ref<Gender>({
    id: 0,
    description: '',
    date_create: new Date(),
    date_update: null,
    user_create: 0,
    user_update: null,
  });

  const storeGenderMessageResponsePersist = ref<GenderMessageResponse>({
    message: '',
  });

  return {
    storeGenderPersist,
    storeGenderMessageResponsePersist,
    storeGenderListResponse,

    getGenderPersist() {
      return computed(() => storeGenderPersist);
    },

    getGenderListResponse() {
      return computed(() => storeGenderListResponse);
    },

    getGenderMessageResponse() {
      return computed(() => storeGenderMessageResponsePersist);
    },

    setGenderPersist(data: Gender) {
      storeGenderPersist.value = data;
    },

    setGenderListResponse(data: GenderListResponse[]) {
      storeGenderListResponse.value = data;
    },

    setGenderMessageResponse(data: GenderMessageResponse) {
      storeGenderMessageResponsePersist.value = data;
    },

    resetGender() {
      storeGenderPersist.value = {
        id: 0,
        description: '',
        date_create: new Date(),
        date_update: null,
        user_create: 0,
        user_update: 0,
      };
    },
  };
});

export default useGenderStore;
