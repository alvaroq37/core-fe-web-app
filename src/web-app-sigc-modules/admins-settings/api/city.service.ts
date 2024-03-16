import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  City,
  CityListResponse,
  CityMessageResponse,
} from '../interface/city.interface';
import useCityComposable from '../composables/useCityComposable';
import useCityStore from '../stores/useCityStore';
import Swal from 'sweetalert2';

const { composableListCity, composablePersistCity } = useCityComposable();
const dataOperationCityStore = useCityStore();

const servicesPersistCity = async (
  dataCity: City
): Promise<CityMessageResponse> => {
  const response = await consumeService.post(REQUEST_API.CITY_SAVE, dataCity);
  if (response.status == 200) {
    const responseMessage: CityMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: CityMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesCityListResponse = async (): Promise<CityListResponse[]> => {
  const { data } = await consumeService.get(REQUEST_API.CITY_LIST);
  const responseCityList: CityListResponse[] = data;
  return responseCityList;
};

const useCityService = () => {
  const dataResponseServiceCity = () => {
    const dataResponse = composablePersistCity(
      servicesPersistCity(dataOperationCityStore.storeCityPersist)
    );
    return dataResponse;
  };

  const dataResponseServiceListCity = () => {
    const dataResponse = composableListCity(servicesCityListResponse());
    return dataResponse;
  };

  return {
    dataResponseServiceCity,
    dataResponseServiceListCity,
  };
};

export default useCityService;
