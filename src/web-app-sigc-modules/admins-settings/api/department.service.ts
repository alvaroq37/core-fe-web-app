import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  Department,
  DepartmentListResponse,
  DepartmentMessageResponse,
} from '../interface/department.interface';
import useDepartment from '../composables/useDepartmentComposable';
import useDepartmentStore from '../stores/useDepartmentStore';
import Swal from 'sweetalert2';

const { composableDepartmentListResponse, composableDepartmentPersist } =
  useDepartment();
const dataOperationCityStore = useDepartmentStore();

const servicesPersistDepartment = async (
  dataDepartment: Department
): Promise<DepartmentMessageResponse> => {
  const response = await consumeService.post(
    REQUEST_API.DEPARTMENT_SAVE,
    dataDepartment
  );
  if (response.status == 200) {
    const responseMessage: DepartmentMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: DepartmentMessageResponse = response.data;
  Swal.fire({
    title: 'Error al procesar la transacción',
    text: responseMessage.message + ' ' + ' INTENTELO DE NUEVO',
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesListResponseDepartment = async () => {
  const { data } = await consumeService.get(REQUEST_API.DEPARTMENT_LIST);
  const departmentList: DepartmentListResponse[] = data;
  return departmentList;
};

const useCountryService = () => {
  const dataResponseServiceDepartment = () => {
    const dataResponse = composableDepartmentPersist(
      servicesPersistDepartment(dataOperationCityStore.storeDepartmentPersist)
    );
    return dataResponse;
  };

  const dataResponseServiceListDepartment = () => {
    const dataResponse = composableDepartmentListResponse(
      servicesListResponseDepartment()
    );
    return dataResponse;
  };

  return {
    dataResponseServiceDepartment,
    dataResponseServiceListDepartment,
  };
};

export default useCountryService;
