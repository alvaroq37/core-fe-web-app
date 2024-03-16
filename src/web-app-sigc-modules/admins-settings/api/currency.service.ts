import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  Currency,
  CurrencyListResponse,
  CurrencyMessageResponse,
} from '../interface/currency.interface';
import useCurrencyComposable from '../composables/useCurrencyComposable';
import useCurrencyStore from '../stores/useCurrencyStore';
import Swal from 'sweetalert2';

const { composableCurrencyPersist, composableListCurrency } =
  useCurrencyComposable();
const dataOperationCityStore = useCurrencyStore();

const servicesPersistCurrency = async (
  dataCurrency: Currency
): Promise<CurrencyMessageResponse> => {
  const response = await consumeService.post(
    REQUEST_API.CURRENCY_SAVE,
    dataCurrency
  );
  if (response.status == 200) {
    const responseMessage: CurrencyMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: CurrencyMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesListResponseCurrency = async () => {
  const { data } = await consumeService.get(REQUEST_API.CURRENCY_LIST);
  const CurrencyList: CurrencyListResponse[] = data;
  console.log(CurrencyList);
  return CurrencyList;
};

const useCurrencyService = () => {
  const dataResponseServiceCurrency = () => {
    const dataResponse = composableCurrencyPersist(
      servicesPersistCurrency(dataOperationCityStore.storeCurrencyPersist)
    );
    dataResponseServiceListCurrency();
    return dataResponse;
  };

  const dataResponseServiceListCurrency = () => {
    const dataResponse = composableListCurrency(servicesListResponseCurrency());
    return dataResponse;
  };

  return {
    dataResponseServiceCurrency,
    dataResponseServiceListCurrency,
  };
};

export default useCurrencyService;
