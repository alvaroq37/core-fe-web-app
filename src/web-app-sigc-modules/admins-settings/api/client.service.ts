import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  Client,
  ClientListResponse,
  ClientMessageResponse,
} from '../interface/client.interface';
import useClientComposable from '../composables/useClientComposable';
import useClientStore from '../stores/useClientStore';
import Swal from 'sweetalert2';

const { composableListClient, composablePersistClient } = useClientComposable();
const dataOperationClientStore = useClientStore();

const servicesPersistClient = async (
  dataCity: Client
): Promise<ClientMessageResponse> => {
  const response = await consumeService.post(REQUEST_API.CLIENT_SAVE, dataCity);
  if (response.status == 200) {
    const responseMessage: ClientMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: ClientMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesClientListResponse = async (): Promise<ClientListResponse[]> => {
  const { data } = await consumeService.get(REQUEST_API.CLIENT_LIST);
  const responseCityList: ClientListResponse[] = data;
  return responseCityList;
};

const useClientService = () => {
  const dataResponseServiceClient = () => {
    const dataResponse = composablePersistClient(
      servicesPersistClient(dataOperationClientStore.storeClientPersist)
    );
    return dataResponse;
  };

  const dataResponseServiceListClient = () => {
    const dataResponse = composableListClient(servicesClientListResponse());
    return dataResponse;
  };

  return {
    dataResponseServiceClient,
    dataResponseServiceListClient,
  };
};

export default useClientService;
