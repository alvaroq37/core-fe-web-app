import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  BusinessDiscount,
  BusinessDiscountListResponse,
  BusinessMessageResponse,
} from '../interface/business.discount.interface';

const useBusinessDiscountStore = defineStore('useBusinessDiscountStore', () => {
  const storeBusinessDiscountListResponse = ref<BusinessDiscountListResponse[]>(
    []
  );
  const storeBusinessDiscountPersist = ref<BusinessDiscount>({
    id: 0,
    description: '',
    status: false,
    value: 0,
    date_create: new Date(),
    date_update: null,
    user_create: 0,
    user_update: null,
  });

  const storeBusinessDiscountMessageResponsePersist =
    ref<BusinessMessageResponse>({
      message: '',
    });

  return {
    storeBusinessDiscountPersist,
    storeBusinessDiscountMessageResponsePersist,
    storeBusinessDiscountListResponse,

    getBusinessDiscountPersist() {
      return computed(() => storeBusinessDiscountPersist);
    },

    getBusinessDiscountListResponse() {
      return computed(() => storeBusinessDiscountListResponse);
    },

    getBusinessDiscountMessageResponse() {
      return computed(() => storeBusinessDiscountMessageResponsePersist);
    },

    setStoreBusinessDiscountPersist(data: BusinessDiscount) {
      storeBusinessDiscountPersist.value = data;
    },

    setStoreBusinessDiscountListResponse(data: BusinessDiscountListResponse[]) {
      storeBusinessDiscountListResponse.value = data;
    },

    setStoreBusinessDiscountMessageResponse(data: BusinessMessageResponse) {
      storeBusinessDiscountMessageResponsePersist.value = data;
    },

    resetBusinessDiscount() {
      storeBusinessDiscountPersist.value = {
        id: 0,
        description: '',
        value: 0,
        status: false,
        date_create: new Date(),
        date_update: null,
        user_create: 0,
        user_update: 0,
      };
    },
  };
});

export default useBusinessDiscountStore;
