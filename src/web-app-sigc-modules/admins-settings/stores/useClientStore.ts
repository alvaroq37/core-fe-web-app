import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  Client,
  ClientMessageResponse,
  ClientListResponse,
} from '../interface/client.interface';

const useClientStore = defineStore('useClientStore', () => {
  const storeClientListResponse = ref<ClientListResponse[]>([]);
  const storeClientPersist = ref<Client>({
    id: 0,
    ci: '',
    names: '',
    names_paternal: '',
    names_maternal: '',
    address: '',
    email: '',
    number_cell_phone: 0,
    number_phone: 0,
    date_create: new Date(),
    date_update: null,
    user_create: 0,
    user_update: null,
    city: null,
    occupation: null,
    gender: null,
    client_category: null,
    dateBirth: 0,
  });

  const storeClientMessageResponsePersist = ref<ClientMessageResponse>({
    message: '',
  });

  return {
    storeClientPersist,
    storeClientMessageResponsePersist,
    storeClientListResponse,

    getClientPersist() {
      return computed(() => storeClientPersist);
    },

    getClientListResponse() {
      return computed(() => storeClientListResponse);
    },

    getClientMessageResponse() {
      return computed(() => storeClientMessageResponsePersist);
    },

    setStoreClientPersist(data: Client) {
      storeClientPersist.value = data;
    },

    setStoreClientListResponse(data: ClientListResponse[]) {
      storeClientListResponse.value = data;
    },

    setStoreClientMessageResponse(data: ClientMessageResponse) {
      storeClientMessageResponsePersist.value = data;
    },

    resetClient() {
      storeClientPersist.value = {
        id: 0,
        ci: '',
        names: '',
        names_paternal: '',
        names_maternal: '',
        address: '',
        email: '',
        number_cell_phone: 0,
        number_phone: 0,
        date_create: new Date(),
        date_update: null,
        user_create: 0,
        user_update: null,
        city: null,
        occupation: null,
        gender: null,
        client_category: null,
        dateBirth: 0,
      };
    },
  };
});

export default useClientStore;
