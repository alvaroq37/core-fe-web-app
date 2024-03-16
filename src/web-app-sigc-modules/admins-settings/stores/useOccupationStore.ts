import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  Occupation,
  OccupationListResponse,
  OccupationMessageResponse,
} from '../interface/occupation.interface';

const useOccupationStore = defineStore('useOccupationStore', () => {
  const storeOccupationListResponse = ref<OccupationListResponse[]>([]);
  const storeOccupationPersist = ref<Occupation>({
    id: 0,
    description: '',
    date_create: new Date(),
    date_update: null,
    user_create: 0,
    user_update: null,
  });

  const storeOccupationMessageResponsePersist = ref<OccupationMessageResponse>({
    message: '',
  });

  return {
    storeOccupationPersist,
    storeOccupationMessageResponsePersist,
    storeOccupationListResponse,

    getOccupationPersist() {
      return computed(() => storeOccupationPersist);
    },

    getOccupationListResponse() {
      return computed(() => storeOccupationListResponse);
    },

    getOccupationMessageResponse() {
      return computed(() => storeOccupationMessageResponsePersist);
    },

    setOccupationPersist(data: Occupation) {
      storeOccupationPersist.value = data;
    },

    setOccupationListResponse(data: OccupationListResponse[]) {
      storeOccupationListResponse.value = data;
    },

    setOccupationMessageResponse(data: OccupationMessageResponse) {
      storeOccupationMessageResponsePersist.value = data;
    },

    resetOccupation() {
      storeOccupationPersist.value = {
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

export default useOccupationStore;
