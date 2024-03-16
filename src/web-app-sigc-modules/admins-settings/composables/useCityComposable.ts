import {
  CityListResponse,
  CityMessageResponse,
} from '../interface/city.interface';
import useCityStore from '../stores/useCityStore';

const useCity = () => {
  const { setStoreCityListResponse, setStoreCityMessageResponse } =
    useCityStore();

  const composablePersistCity = async (data: Promise<CityMessageResponse>) => {
    const cityResponsePersist = await data;
    const cityMessageResponse: CityMessageResponse = cityResponsePersist;
    setStoreCityMessageResponse(cityMessageResponse);
  };

  const composableListCity = async (data: Promise<CityListResponse[]>) => {
    const responseList = await data;
    const listResponse: CityListResponse[] = responseList;
    setStoreCityListResponse(listResponse);
  };

  return { composablePersistCity, composableListCity };
};

export default useCity;
