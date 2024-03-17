import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  Client,
  ClientMessageResponse,
  ClientListResponse,
  ClientFindByCi,
  ClientFindByNames,
} from '../interface/client.interface';

const useClientStore = defineStore('useClientStore', () => {
  const storeClientListResponse = ref<ClientListResponse[]>([]);
  const storeClientResponseFind = ref<ClientListResponse>({
    id: 0,
    ci: '',
    names: '',
    lastNamesPaternal: '',
    lastNamesMaternal: '',
    address: '',
    cellPhone: 0,
    phone: 0,
    email: '',
    dateBirth: null,
    date_create: null,
    date_update: null,
    user_create: null,
    user_update: null,
    city: null,
    sex: null,
    occupation: null,
    client_category: null,
  });
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

  const storeClientFindByNames = ref<ClientFindByNames>({
    names: '',
  });

  const storeClientFindByCi = ref<ClientFindByCi>({
    ci: '',
  });

  const storeClientMessageResponsePersist = ref<ClientMessageResponse>({
    message: '',
  });

  return {
    storeClientPersist,
    storeClientMessageResponsePersist,
    storeClientListResponse,
    storeClientFindByCi,
    storeClientFindByNames,
    storeClientResponseFind,

    getClientPersist() {
      return computed(() => storeClientPersist);
    },

    getClientListResponse() {
      return computed(() => storeClientListResponse);
    },

    getClientMessageResponse() {
      return computed(() => storeClientMessageResponsePersist);
    },

    getClientFindByCi() {
      return computed(() => storeClientFindByCi);
    },

    getClientFindByNames() {
      return computed(() => storeClientFindByNames);
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

    setStoreClientFindByCi(data: ClientListResponse) {
      storeClientResponseFind.value = data;
    },

    setStoreClientFindByNames(data: ClientListResponse) {
      storeClientResponseFind.value = data;
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
    resetClientFind() {
      storeClientResponseFind.value = {
        id: 0,
        ci: '',
        names: '',
        lastNamesPaternal: '',
        lastNamesMaternal: '',
        address: '',
        cellPhone: 0,
        phone: 0,
        email: '',
        dateBirth: null,
        date_create: null,
        date_update: null,
        user_create: null,
        user_update: null,
        city: null,
        sex: null,
        occupation: null,
        client_category: null,
      };
    },
    resetFindByCi() {
      storeClientFindByCi.value = {
        ci: '',
      };
    },
    resetFindByNames() {
      storeClientFindByNames.value = {
        names: '',
      };
    },
  };
});

export default useClientStore;
