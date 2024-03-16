import {
  ClientCategoryMessageResponse,
  ClientCategoryListResponse,
} from '../interface/client.category.interface';
import useClientCategoryStore from '../stores/useClientCategoryStore';

const useClientCategory = () => {
  const { setClientCategoryListResponse, setClientCategoryMessageResponse } =
    useClientCategoryStore();

  const composableClientCategoryPersist = async (
    data: Promise<ClientCategoryMessageResponse>
  ) => {
    const categoryResponsePersist = await data;
    const categoryMessageResponse: ClientCategoryMessageResponse =
      categoryResponsePersist;
    setClientCategoryMessageResponse(categoryMessageResponse);
  };

  const composableClientCategoryList = async (
    data: Promise<ClientCategoryListResponse[]>
  ) => {
    const responseListClientCategory = await data;
    const listResponse: ClientCategoryListResponse[] =
      responseListClientCategory;
    setClientCategoryListResponse(listResponse);
  };

  return { composableClientCategoryPersist, composableClientCategoryList };
};

export default useClientCategory;
