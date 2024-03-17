import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  Client,
  ClientListResponse,
  ClientMessageResponse,
  ClientFindByCi,
  ClientFindByNames,
} from '../interface/client.interface';
import useClientComposable from '../composables/useClientComposable';
import useClientStore from '../stores/useClientStore';
import Swal from 'sweetalert2';

const {
  composableListClient,
  composablePersistClient,
  composableClientFindByCi,
  composableClientFindByNames,
} = useClientComposable();
const dataOperationClientStore = useClientStore();

const serviceClientFindByNames = async (
  dataClient: ClientFindByNames
): Promise<ClientListResponse> => {
  const { data } = await consumeService.post(
    REQUEST_API.CLIENT_FIND_NAME,
    dataClient
  );
  const response: ClientListResponse = data;
  return response;
};

const serviceClientFindByCi = async (
  dataClient: ClientFindByCi
): Promise<ClientListResponse> => {
  const { data } = await consumeService.post(
    REQUEST_API.CLIENT_FIND_CI,
    dataClient
  );
  const response: ClientListResponse = data;
  console.log(response);
  return response;
};

const servicesPersistClient = async (
  dataClient: Client
): Promise<ClientMessageResponse> => {
  const response = await consumeService.post(
    REQUEST_API.CLIENT_SAVE,
    dataClient
  );
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

  const dataResponseServiceClientFindByNames = (data: ClientFindByNames) => {
    const dataResponse = composableClientFindByNames(
      serviceClientFindByNames(data)
    );
    return dataResponse;
  };
  const dataResponseServiceClientFindByCi = (data: ClientFindByCi) => {
    const dataResponse = composableClientFindByCi(serviceClientFindByCi(data));
    return dataResponse;
  };

  return {
    dataResponseServiceClient,
    dataResponseServiceListClient,
    dataResponseServiceClientFindByNames,
    dataResponseServiceClientFindByCi,
  };
};

export default useClientService;
