import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  Occupation,
  OccupationListResponse,
  OccupationMessageResponse,
} from '../interface/occupation.interface';
import useOccupationStore from '../stores/useOccupationStore';
import useOccupationComposable from '../composables/useOccupationComposable';
import Swal from 'sweetalert2';

const { composableOccupationPersist, composableOccupationList } =
  useOccupationComposable();
const dataOperationOccupationStore = useOccupationStore();

const serviceOccupationPersist = async (
  dataOccupation: Occupation
): Promise<OccupationMessageResponse> => {
  const response = await consumeService.post(
    REQUEST_API.OCCUPATION_SAVE,
    dataOccupation
  );
  if (response.status == 200) {
    const responseMessage: OccupationMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: OccupationMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesOccupationList = async () => {
  const { data } = await consumeService.get(REQUEST_API.OCCUPATION_LIST);
  const occupationList: OccupationListResponse[] = data;
  console.log(occupationList);
  return occupationList;
};

const useOccupationService = () => {
  const dataOccupationServiceResponse = () => {
    const dataResponse = composableOccupationPersist(
      serviceOccupationPersist(
        dataOperationOccupationStore.storeOccupationPersist
      )
    );
    return dataResponse;
  };

  const dataOccupationServiceList = () => {
    const dataResponse = composableOccupationList(servicesOccupationList());
    return dataResponse;
  };

  return {
    dataOccupationServiceResponse,
    dataOccupationServiceList,
  };
};

export default useOccupationService;
