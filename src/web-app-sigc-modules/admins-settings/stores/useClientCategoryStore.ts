import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  ClientCategory,
  ClientCategoryListResponse,
  ClientCategoryMessageResponse,
} from '../interface/client.category.interface';

const useClientCategoryStore = defineStore('useClientCategoryStore', () => {
  const storeClientCategoryListResponse = ref<ClientCategoryListResponse[]>([]);
  const storeClientCategoryPersist = ref<ClientCategory>({
    id: 0,
    description: '',
    value: '',
    date_create: new Date(),
    date_update: null,
    user_create: 0,
    user_update: 0,
  });
  const storeClientCategoryMessageResponse = ref<ClientCategoryMessageResponse>(
    {
      message: '',
    }
  );

  return {
    storeClientCategoryListResponse,
    storeClientCategoryPersist,
    storeClientCategoryMessageResponse,

    getClientCategoryPersist() {
      return computed(() => storeClientCategoryPersist);
    },
    getClientCategoryListResponse() {
      return computed(() => storeClientCategoryListResponse);
    },
    getClientCategoryMessageResponse() {
      return computed(() => storeClientCategoryMessageResponse);
    },
    setClientCategoryPersist(data: ClientCategory) {
      storeClientCategoryPersist.value = data;
    },
    setClientCategoryListResponse(data: ClientCategoryListResponse[]) {
      storeClientCategoryListResponse.value = data;
    },
    setClientCategoryMessageResponse(data: ClientCategoryMessageResponse) {
      storeClientCategoryMessageResponse.value = data;
    },

    resetClientCategory() {
      storeClientCategoryPersist.value = {
        id: 0,
        description: '',
        value: '',
        date_create: new Date(),
        date_update: null,
        user_create: 0,
        user_update: 0,
      };
    },
  };
});

export default useClientCategoryStore;
