import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  Agency,
  AgencyListResponse,
  AgencyMessageResponse,
} from '../interface/agency.interface';
import useAgencyComposable from '../composables/useAgencyComposable';
import useAgencyStore from '../stores/useAgencyStore';
import Swal from 'sweetalert2';

const { composableListAgency, composablePersistAgency } = useAgencyComposable();
const dataOperationAgencyStore = useAgencyStore();

const servicesPersistAgency = async (
  dataCity: Agency
): Promise<AgencyMessageResponse> => {
  const response = await consumeService.post(REQUEST_API.AGENCY_SAVE, dataCity);
  console.log(response);
  if (response.status == 200) {
    const responseMessage: AgencyMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: AgencyMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesAgencyListResponse = async (): Promise<AgencyListResponse[]> => {
  const { data } = await consumeService.get(REQUEST_API.AGENCY_LIST);
  const responseCityList: AgencyListResponse[] = data;
  return responseCityList;
};

const useAgencyService = () => {
  const dataResponseServiceAgency = () => {
    const dataResponse = composablePersistAgency(
      servicesPersistAgency(dataOperationAgencyStore.storeAgencyPersist)
    );
    return dataResponse;
  };

  const dataResponseServiceListAgency = () => {
    const dataResponse = composableListAgency(servicesAgencyListResponse());
    return dataResponse;
  };

  return {
    dataResponseServiceAgency,
    dataResponseServiceListAgency,
  };
};

export default useAgencyService;
