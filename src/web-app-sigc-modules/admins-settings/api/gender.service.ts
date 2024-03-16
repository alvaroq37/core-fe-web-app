import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  Gender,
  GenderListResponse,
  GenderMessageResponse,
} from '../interface/gender.interface';
import useGenderStore from '../stores/useGenderStore';
import useGenderComposable from '../composables/useGenderComposable';
import Swal from 'sweetalert2';

const { composableGenderPersist, composableGenderList } = useGenderComposable();
const dataOperationGenderStore = useGenderStore();

const serviceGenderPersist = async (
  dataGender: Gender
): Promise<GenderMessageResponse> => {
  const response = await consumeService.post(
    REQUEST_API.GENDER_SAVE,
    dataGender
  );
  if (response.status == 200) {
    const responseMessage: GenderMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: GenderMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesGenderList = async () => {
  const { data } = await consumeService.get(REQUEST_API.GENDER_LIST);
  const occupationList: GenderListResponse[] = data;
  console.log(occupationList);
  return occupationList;
};

const useGenderService = () => {
  const dataGenderServiceResponse = () => {
    const dataResponse = composableGenderPersist(
      serviceGenderPersist(dataOperationGenderStore.storeGenderPersist)
    );
    return dataResponse;
  };

  const dataGenderServiceList = () => {
    const dataResponse = composableGenderList(servicesGenderList());
    return dataResponse;
  };

  return {
    dataGenderServiceResponse,
    dataGenderServiceList,
  };
};

export default useGenderService;
