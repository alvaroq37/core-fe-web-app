import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  User,
  UserMessageResponse,
  UserListResponse,
} from '../interface/user.interface';

const useUserStore = defineStore('useUserStore', () => {
  const storeUserListResponse = ref<UserListResponse[]>([]);
  const storeUserPersist = ref<User>({
    id: 0,
    address: '',
    cellPhone: 0,
    ci: '',
    dateBirth: '',
    dateCreate: new Date(),
    dateUpdate: null,
    email: '',
    lastNamesMaternal: '',
    lastNamesPaternal: '',
    names: '',
    phone: 0,
    user_create: 0,
    userUpdate: null,
    city: null,
    agency: null,
    gender: null,
    occupation: null,
  });
  const storeUserMessageResponse = ref<UserMessageResponse>({
    message: '',
  });

  return {
    storeUserListResponse,
    storeUserPersist,
    storeUserMessageResponse,

    getStoreUserPersist() {
      return computed(() => storeUserPersist);
    },
    getStoreUserListResponse() {
      return computed(() => storeUserListResponse);
    },
    getStoreUserMessageResponse() {
      return computed(() => storeUserMessageResponse);
    },
    setStoreUserPersist(data: User) {
      storeUserPersist.value = data;
    },
    setStoreUserListResponse(data: UserListResponse[]) {
      storeUserListResponse.value = data;
    },
    setStoreUserMessageResponse(data: UserMessageResponse) {
      storeUserMessageResponse.value = data;
    },

    resetUser() {
      storeUserPersist.value = {
        id: 0,
        address: '',
        cellPhone: 0,
        ci: '',
        dateBirth: '',
        dateCreate: new Date(),
        dateUpdate: null,
        email: '',
        lastNamesMaternal: '',
        lastNamesPaternal: '',
        names: '',
        phone: 0,
        user_create: 0,
        userUpdate: null,
        city: null,
        agency: null,
        gender: null,
        occupation: null,
      };
    },
  };
});

export default useUserStore;
