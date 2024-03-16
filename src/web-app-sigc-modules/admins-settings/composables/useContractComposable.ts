import {
  ContractListResponse,
  ContractMessageRespose,
} from '../interface/contract.interface';
import useContractStore from '../stores/useContractStore';

const useContract = () => {
  const { setStoreContractListResponse, setStoreContractMessageResponse } =
    useContractStore();

  const composablePersistContract = async (
    data: Promise<ContractMessageRespose>
  ) => {
    const contractResponsePersist = await data;
    const contractMessageResponse: ContractMessageRespose =
      contractResponsePersist;
    setStoreContractMessageResponse(contractMessageResponse);
  };

  const composableListContract = async (
    data: Promise<ContractListResponse[]>
  ) => {
    const responseList = await data;
    const listResponse: ContractListResponse[] = responseList;
    setStoreContractListResponse(listResponse);
  };

  return { composableListContract, composablePersistContract };
};

export default useContract;
