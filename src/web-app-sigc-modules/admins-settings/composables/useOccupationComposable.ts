import {
  OccupationListResponse,
  OccupationMessageResponse,
} from '../interface/occupation.interface';
import useOccupationStore from '../stores/useOccupationStore';

const useOccupation = () => {
  const { setOccupationListResponse, setOccupationMessageResponse } =
    useOccupationStore();

  const composableOccupationPersist = async (
    data: Promise<OccupationMessageResponse>
  ) => {
    const occupationResponsePersist = await data;
    const occupationMessageResponse = occupationResponsePersist;
    setOccupationMessageResponse(occupationMessageResponse);
  };

  const composableOccupationList = async (
    data: Promise<OccupationListResponse[]>
  ) => {
    const occupationListResponse = await data;
    const listOccupationResponse: OccupationListResponse[] =
      occupationListResponse;
    setOccupationListResponse(listOccupationResponse);
  };

  return { composableOccupationList, composableOccupationPersist };
};

export default useOccupation;
