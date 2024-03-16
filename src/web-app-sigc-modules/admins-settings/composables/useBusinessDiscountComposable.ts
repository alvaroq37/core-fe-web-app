import {
  BusinessDiscountListResponse,
  BusinessMessageResponse,
} from '../interface/business.discount.interface';
import useBusinessDiscountStore from '../stores/useBusinessDiscountStore';

const useBusinessDiscount = () => {
  const {
    setStoreBusinessDiscountListResponse,
    setStoreBusinessDiscountMessageResponse,
  } = useBusinessDiscountStore();

  const composablePersistBusinessDiscount = async (
    data: Promise<BusinessMessageResponse>
  ) => {
    const businessDiscountResponsePersist = await data;
    const businessDiscountMessageResponse: BusinessMessageResponse =
      businessDiscountResponsePersist;
    setStoreBusinessDiscountMessageResponse(businessDiscountMessageResponse);
  };

  const composableListBusinessDiscount = async (
    data: Promise<BusinessDiscountListResponse[]>
  ) => {
    const responseList = await data;
    const listResponse: BusinessDiscountListResponse[] = responseList;
    setStoreBusinessDiscountListResponse(listResponse);
  };

  return { composableListBusinessDiscount, composablePersistBusinessDiscount };
};

export default useBusinessDiscount;
