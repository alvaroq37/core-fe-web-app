import {
  CurrencyListResponse,
  CurrencyMessageResponse,
} from '../interface/currency.interface';
import useCurrencyStore from '../stores/useCurrencyStore';

const useCurrency = () => {
  const { setStoreCurrencyListResponse, setStoreCurrencyMessageResponse } =
    useCurrencyStore();

  const composableCurrencyPersist = async (
    data: Promise<CurrencyMessageResponse>
  ) => {
    const CurrencyResponsePersist = await data;
    const CurrencyMessageResponse: CurrencyMessageResponse =
      CurrencyResponsePersist;
    setStoreCurrencyMessageResponse(CurrencyMessageResponse);
  };

  const composableListCurrency = async (
    data: Promise<CurrencyListResponse[]>
  ) => {
    const responseListCurrencys = await data;
    const listResponse: CurrencyListResponse[] = responseListCurrencys;
    setStoreCurrencyListResponse(listResponse);
  };

  return { composableCurrencyPersist, composableListCurrency };
};

export default useCurrency;
