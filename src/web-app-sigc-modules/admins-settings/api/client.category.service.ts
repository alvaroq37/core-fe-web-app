import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  ClientCategory,
  ClientCategoryListResponse,
  ClientCategoryMessageResponse,
} from '../interface/client.category.interface';
import useClientCategoryComposable from '../composables/useClientCategoryComposable';
import useClientCategoryStore from '../stores/useClientCategoryStore';
import Swal from 'sweetalert2';

const { composableClientCategoryList, composableClientCategoryPersist } =
  useClientCategoryComposable();
const dataOperationClientCategoryStore = useClientCategoryStore();

const servicesClientCategoryPersist = async (
  dataClientCategory: ClientCategory
): Promise<ClientCategoryMessageResponse> => {
  const response = await consumeService.post(
    REQUEST_API.CATEGORY_CLIENT_SAVE,
    dataClientCategory
  );
  if (response.status == 200) {
    const responseMessage: ClientCategoryMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: ClientCategoryMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesClientCategoryListResponse = async () => {
  const { data } = await consumeService.get(REQUEST_API.CATEGORY_CLIENT_LIST);
  const clientCategoryList: ClientCategoryListResponse[] = data;
  return clientCategoryList;
};

const useClientCategoryService = () => {
  const dataResponseServiceClientCategory = () => {
    const dataResponse = composableClientCategoryPersist(
      servicesClientCategoryPersist(
        dataOperationClientCategoryStore.storeClientCategoryPersist
      )
    );
    return dataResponse;
  };

  const dataResponseServiceListClientCategory = () => {
    const dataResponse = composableClientCategoryList(
      servicesClientCategoryListResponse()
    );
    return dataResponse;
  };

  return {
    dataResponseServiceClientCategory,
    dataResponseServiceListClientCategory,
  };
};

export default useClientCategoryService;
