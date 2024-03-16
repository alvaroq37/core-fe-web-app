import {
  GenderListResponse,
  GenderMessageResponse,
} from '../interface/gender.interface';
import useGenderStore from '../stores/useGenderStore';

const useGender = () => {
  const { setGenderListResponse, setGenderMessageResponse } = useGenderStore();

  const composableGenderPersist = async (
    data: Promise<GenderMessageResponse>
  ) => {
    const occupationResponsePersist = await data;
    const occupationMessageResponse = occupationResponsePersist;
    setGenderMessageResponse(occupationMessageResponse);
  };

  const composableGenderList = async (data: Promise<GenderListResponse[]>) => {
    const occupationListResponse = await data;
    const listOccupationResponse: GenderListResponse[] = occupationListResponse;
    setGenderListResponse(listOccupationResponse);
  };

  return { composableGenderList, composableGenderPersist };
};

export default useGender;
