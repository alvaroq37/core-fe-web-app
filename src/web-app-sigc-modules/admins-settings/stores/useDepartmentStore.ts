import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  Department,
  DepartmentListResponse,
  DepartmentMessageResponse,
} from '../interface/department.interface';

const useDepartmentStore = defineStore('useDepartmentStore', () => {
  const storeDepartmentListResponse = ref<DepartmentListResponse[]>([]);
  const storeDepartmentPersist = ref<Department>({
    id: 0,
    name: '',
    date_create: new Date(),
    date_update: null,
    user_create: 0,
    user_update: null,
    country: null,
  });

  const storeDepartmentMessageResponsePersist = ref<DepartmentMessageResponse>({
    message: '',
  });

  return {
    storeDepartmentListResponse,
    storeDepartmentPersist,
    storeDepartmentMessageResponsePersist,

    getStoreDepartmentPersist() {
      return computed(() => storeDepartmentPersist);
    },

    getStoreDepartmentListResponse() {
      return computed(() => storeDepartmentListResponse);
    },

    getStoreDepartmentMessageResponse() {
      return computed(() => storeDepartmentMessageResponsePersist);
    },

    setStoreDepartmentPersist(data: Department) {
      storeDepartmentPersist.value = data;
    },

    setStoreDepartmentListResponse(data: DepartmentListResponse[]) {
      storeDepartmentListResponse.value = data;
    },

    setStoreDepartmentMessageResponse(data: DepartmentMessageResponse) {
      storeDepartmentMessageResponsePersist.value = data;
    },

    resetDepartment() {
      storeDepartmentPersist.value = {
        id: 0,
        date_create: new Date(),
        date_update: null,
        name: '',
        user_create: 0,
        user_update: 0,
        country: null,
      };
    },
  };
});

export default useDepartmentStore;
