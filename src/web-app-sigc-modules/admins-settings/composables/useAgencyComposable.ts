import {
  AgencyMessageResponse,
  AgencyListResponse,
} from '../interface/agency.interface';
import useAgencyStore from '../stores/useAgencyStore';

const useAgency = () => {
  const { setStoreAgencyListResponse, setStoreAgencyMessageResponse } =
    useAgencyStore();

  const composablePersistAgency = async (
    data: Promise<AgencyMessageResponse>
  ) => {
    const agencyResponsePersist = await data;
    const agencyMessageResponse: AgencyMessageResponse = agencyResponsePersist;
    setStoreAgencyMessageResponse(agencyMessageResponse);
  };

  const composableListAgency = async (data: Promise<AgencyListResponse[]>) => {
    const responseList = await data;
    const listResponse: AgencyListResponse[] = responseList;
    setStoreAgencyListResponse(listResponse);
  };

  return { composableListAgency, composablePersistAgency };
};

export default useAgency;
