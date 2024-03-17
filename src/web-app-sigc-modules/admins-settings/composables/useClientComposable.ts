import {
  ClientListResponse,
  ClientMessageResponse,
} from '../interface/client.interface';
import useClientStore from '../stores/useClientStore';

const useClient = () => {
  const {
    setStoreClientListResponse,
    setStoreClientMessageResponse,
    setStoreClientFindByCi,
    setStoreClientFindByNames,
  } = useClientStore();

  const composableClientFindByNames = async (
    data: Promise<ClientListResponse>
  ) => {
    const clientResponseFindByNames = await data;
    const clientResponse: ClientListResponse = clientResponseFindByNames;
    setStoreClientFindByNames(clientResponse);
  };
  const composableClientFindByCi = async (
    data: Promise<ClientListResponse>
  ) => {
    const clientResponseFindByCi = await data;
    const clientResponse: ClientListResponse = clientResponseFindByCi;
    setStoreClientFindByCi(clientResponse);
  };
  const composablePersistClient = async (
    data: Promise<ClientMessageResponse>
  ) => {
    const clientResponsePersist = await data;
    const clientMessageResponse: ClientMessageResponse = clientResponsePersist;
    setStoreClientMessageResponse(clientMessageResponse);
  };

  const composableListClient = async (data: Promise<ClientListResponse[]>) => {
    const responseList = await data;
    const listResponse: ClientListResponse[] = responseList;
    setStoreClientListResponse(listResponse);
  };

  return {
    composableListClient,
    composablePersistClient,
    composableClientFindByCi,
    composableClientFindByNames,
  };
};

export default useClient;
