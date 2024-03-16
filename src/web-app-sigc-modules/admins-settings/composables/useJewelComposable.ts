import {
  JewelListResponse,
  JewelMessageResponse,
} from '../interface/jewel.interface';
import useJewelStore from '../stores/useJewelStore';

const useJewel = () => {
  const { setStoreJewelListResponse, setStoreJewelMessageResponse } =
    useJewelStore();

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

  return { composableListJewel, composablePersistJewel };
};

export default useJewel;
