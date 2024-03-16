import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  Country,
  CountryListResponse,
  CountryMessageResponse,
} from '../interface/country.interface';
import useCountryComposable from '../composables/useCountryComposable';
import useCountryStore from '../stores/useCountryStore';
import Swal from 'sweetalert2';

const { composableCountryPersist, composableListCountry } =
  useCountryComposable();
const dataOperationCityStore = useCountryStore();

const servicesPersistCountry = async (
  dataCountry: Country
): Promise<CountryMessageResponse> => {
  const response = await consumeService.post(
    REQUEST_API.COUNTRY_SAVE,
    dataCountry
  );
  if (response.status == 200) {
    const responseMessage: CountryMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: CountryMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesListResponseCountry = async () => {
  const { data } = await consumeService.get(REQUEST_API.COUNTRY_LIST);
  const countryList: CountryListResponse[] = data;
  console.log(countryList);
  return countryList;
};

const useCountryService = () => {
  const dataResponseServiceCountry = () => {
    const dataResponse = composableCountryPersist(
      servicesPersistCountry(dataOperationCityStore.storeCountryPersist)
    );
    dataResponseServiceListCountry();
    return dataResponse;
  };

  const dataResponseServiceListCountry = () => {
    const dataResponse = composableListCountry(servicesListResponseCountry());
    return dataResponse;
  };

  return {
    dataResponseServiceCountry,
    dataResponseServiceListCountry,
  };
};

export default useCountryService;
