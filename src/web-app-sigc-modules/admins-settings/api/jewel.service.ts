import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  Jewel,
  JewelListResponse,
  JewelMessageResponse,
  JewelFindById,
} from '../interface/jewel.interface';
import useJewelComposable from '../composables/useJewelComposable';
import useJewelStore from '../stores/useJewelStore';
import Swal from 'sweetalert2';
import { reactive, ref } from 'vue';

const { composableListJewel, composablePersistJewel, composableFindByIdJewel } =
  useJewelComposable();
const dataOperationJewelStore = useJewelStore();

const servicesFindByIdJewel = async (
  dataJewel: JewelFindById
): Promise<JewelListResponse> => {
  const { data } = await consumeService.post(
    REQUEST_API.JEWEL_FIND_ID,
    dataJewel
  );
  const response: JewelListResponse = data;
  return response;
};

const servicesPersistJewel = async (
  dataJewel: Jewel
): Promise<JewelMessageResponse> => {
  const response = await consumeService.post(REQUEST_API.JEWEL_SAVE, dataJewel);
  if (response.status == 200) {
    const responseMessage: JewelMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: JewelMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesJewelListResponse = async (): Promise<JewelListResponse[]> => {
  const { data } = await consumeService.get(REQUEST_API.JEWEL_LIST);
  const responseCityList: JewelListResponse[] = data;
  return responseCityList;
};

const useJewelService = () => {
  const dataResponseServiceJewel = () => {
    const dataResponse = composablePersistJewel(
      servicesPersistJewel(dataOperationJewelStore.storeJewelPersist)
    );
    return dataResponse;
  };

  const dataResponseServiceListJewel = () => {
    const dataResponse = composableListJewel(servicesJewelListResponse());
    return dataResponse;
  };

  const dataResponseServiceFindByIdJewel = (data: JewelFindById) => {
    const dataResponse = composableFindByIdJewel(servicesFindByIdJewel(data));
    return dataResponse;
  };

  return {
    dataResponseServiceJewel,
    dataResponseServiceListJewel,
    dataResponseServiceFindByIdJewel,
  };
};

export default useJewelService;
