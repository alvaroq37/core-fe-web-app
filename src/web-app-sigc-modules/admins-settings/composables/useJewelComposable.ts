import {
  JewelListResponse,
  JewelMessageResponse,
} from '../interface/jewel.interface';
import useJewelStore from '../stores/useJewelStore';

const useJewel = () => {
  const {
    setStoreJewelListResponse,
    setStoreJewelMessageResponse,
    setStoreJewelFindById,
  } = useJewelStore();

  const composableFindByIdJewel = async (data: Promise<JewelListResponse>) => {
    const jewelResponseFindById = await data;
    const jewelResponse: JewelListResponse = jewelResponseFindById;
    setStoreJewelFindById(jewelResponse);
  };

  const composablePersistJewel = async (
    data: Promise<JewelMessageResponse>
  ) => {
    const jewelResponsePersist = await data;
    const jewelMessageResponse: JewelMessageResponse = jewelResponsePersist;
    setStoreJewelMessageResponse(jewelMessageResponse);
  };

  const composableListJewel = async (data: Promise<JewelListResponse[]>) => {
    const responseList = await data;
    const listResponse: JewelListResponse[] = responseList;
    setStoreJewelListResponse(listResponse);
  };

  return {
    composableListJewel,
    composablePersistJewel,
    composableFindByIdJewel,
  };
};

export default useJewel;
