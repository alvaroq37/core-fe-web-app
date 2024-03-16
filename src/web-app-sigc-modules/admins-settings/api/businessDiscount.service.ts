import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  BusinessDiscount,
  BusinessDiscountListResponse,
  BusinessMessageResponse,
} from '../interface/business.discount.interface';
import useBusinessDiscountComposable from '../composables/useBusinessDiscountComposable';
import useBusinessDiscountStore from '../stores/useBusinessDiscountStore';
import Swal from 'sweetalert2';

const { composableListBusinessDiscount, composablePersistBusinessDiscount } =
  useBusinessDiscountComposable();
const dataOperationBusinessDiscountStore = useBusinessDiscountStore();

const servicesPersistBusinessDiscount = async (
  dataCity: BusinessDiscount
): Promise<BusinessMessageResponse> => {
  const response = await consumeService.post(
    REQUEST_API.BUSINESS_DISCOUNT_SAVE,
    dataCity
  );
  if (response.status == 200) {
    const responseMessage: BusinessMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: BusinessMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesBusinessDiscountListResponse = async (): Promise<
  BusinessDiscountListResponse[]
> => {
  const { data } = await consumeService.get(REQUEST_API.BUSINESS_DISCOUNT_LIST);
  const responseCityList: BusinessDiscountListResponse[] = data;
  return responseCityList;
};

const useBusinessDiscountService = () => {
  const dataResponseServiceBusinessDiscount = () => {
    const dataResponse = composablePersistBusinessDiscount(
      servicesPersistBusinessDiscount(
        dataOperationBusinessDiscountStore.storeBusinessDiscountPersist
      )
    );
    return dataResponse;
  };

  const dataResponseServiceListBusinessDiscount = () => {
    const dataResponse = composableListBusinessDiscount(
      servicesBusinessDiscountListResponse()
    );
    return dataResponse;
  };

  return {
    dataResponseServiceBusinessDiscount,
    dataResponseServiceListBusinessDiscount,
  };
};

export default useBusinessDiscountService;
