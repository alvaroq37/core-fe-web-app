import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  Contract,
  ContractListResponse,
  ContractMessageResponse,
} from '../interface/contract.interface';
import useContractComposable from '../composables/useContractComposable';
import useContractStore from '../stores/useContractStore';
import Swal from 'sweetalert2';

const { composableListContract, composablePersistContract } =
  useContractComposable();
const dataOperationContractStore = useContractStore();

const servicesPersistContract = async (
  dataCity: Contract
): Promise<ContractMessageResponse> => {
  const response = await consumeService.post(
    REQUEST_API.CONTRACT_SAVE,
    dataCity
  );
  if (response.status == 200) {
    const responseMessage: ContractMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: ContractMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesContractListResponse = async (): Promise<
  ContractListResponse[]
> => {
  const { data } = await consumeService.get(REQUEST_API.CONTRACT_LIST);
  const responseCityList: ContractListResponse[] = data;
  return responseCityList;
};

const useContractService = () => {
  const dataResponseServiceContract = () => {
    const dataResponse = composablePersistContract(
      servicesPersistContract(dataOperationContractStore.storeContractPersist)
    );
    return dataResponse;
  };

  const dataResponseServiceListContract = () => {
    const dataResponse = composableListContract(servicesContractListResponse());
    return dataResponse;
  };

  return {
    dataResponseServiceContract,
    dataResponseServiceListContract,
  };
};

export default useContractService;
