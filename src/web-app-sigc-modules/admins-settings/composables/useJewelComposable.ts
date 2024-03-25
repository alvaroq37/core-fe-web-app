import { ref } from 'vue';
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
    storeJewelListDetail,
  } = useJewelStore();

  const composableFindByIdJewel = async (data: Promise<JewelListResponse>) => {
    const jewelResponseFindById = await data;
    const jewelResponse: JewelListResponse = jewelResponseFindById;
    const detail = ref<JewelListResponse>({
      id: jewelResponse.id,
      jewel: jewelResponse.jewel,
      number_parts: jewelResponse.number_parts,
      jewel_type: jewelResponse.jewel_type,
      gross_weight: jewelResponse.gross_weight,
      net_weight: jewelResponse.net_weight,
      net_weight_loan: jewelResponse.net_weight_loan,
      description: jewelResponse.description,
      date_create: jewelResponse.date_create,
      date_update: jewelResponse.date_update,
      user_create: jewelResponse.user_create,
      user_update: jewelResponse.user_update,
      material: jewelResponse.material,
    });
    storeJewelListDetail.push(detail.value);
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
