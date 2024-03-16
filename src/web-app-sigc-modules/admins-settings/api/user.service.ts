import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  User,
  UserListResponse,
  UserMessageResponse,
} from '../interface/user.interface';
import useUserComposable from '../composables/useUserComposable';
import useUserStore from '../stores/useUserStore';
import Swal from 'sweetalert2';

const { composableListUser, composablePersistUser } = useUserComposable();
const dataOperationUserStore = useUserStore();

const servicesPersistUser = async (
  dataCity: User
): Promise<UserMessageResponse> => {
  const response = await consumeService.post(REQUEST_API.USER_SAVE, dataCity);
  if (response.status == 200) {
    const responseMessage: UserMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: UserMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesUserListResponse = async (): Promise<UserListResponse[]> => {
  const { data } = await consumeService.get(REQUEST_API.USER_LIST);
  const responseCityList: UserListResponse[] = data;
  return responseCityList;
};

const useUserService = () => {
  const dataResponseServiceUser = () => {
    const dataResponse = composablePersistUser(
      servicesPersistUser(dataOperationUserStore.storeUserPersist)
    );
    return dataResponse;
  };

  const dataResponseServiceListUser = () => {
    const dataResponse = composableListUser(servicesUserListResponse());
    return dataResponse;
  };

  return {
    dataResponseServiceUser,
    dataResponseServiceListUser,
  };
};

export default useUserService;
