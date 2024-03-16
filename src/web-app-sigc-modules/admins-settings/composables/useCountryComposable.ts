import {
  CountryListResponse,
  CountryMessageResponse,
} from '../interface/country.interface';
import useCountryStore from '../stores/useCountryStore';

const useCountry = () => {
  const { setStoreCountryListResponse, setStoreCountryMessageResponse } =
    useCountryStore();

  const composableCountryPersist = async (
    data: Promise<CountryMessageResponse>
  ) => {
    const countryResponsePersist = await data;
    const countryMessageResponse: CountryMessageResponse =
      countryResponsePersist;
    setStoreCountryMessageResponse(countryMessageResponse);
  };

  const composableListCountry = async (
    data: Promise<CountryListResponse[]>
  ) => {
    const responseListCountrys = await data;
    const listResponse: CountryListResponse[] = responseListCountrys;
    setStoreCountryListResponse(listResponse);
  };

  return { composableCountryPersist, composableListCountry };
};

export default useCountry;
