import {
  ClientListResponse,
  ClientMessageResponse,
} from '../interface/client.interface';
import useClientStore from '../stores/useClientStore';

const useClient = () => {
  const { setStoreClientListResponse, setStoreClientMessageResponse } =
    useClientStore();

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

  return { composableListClient, composablePersistClient };
};

export default useClient;
