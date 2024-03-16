import {
  MaterialListResponse,
  MaterialMessageResponse,
} from '../interface/material.interface';
import useMaterialStore from '../stores/useMaterialStore';

const useMaterial = () => {
  const { setStoreMaterialListResponse, setStoreMaterialMessageResponse } =
    useMaterialStore();

  const composablePersistMaterial = async (
    data: Promise<MaterialMessageResponse>
  ) => {
    const materialResponsePersist = await data;
    const materialMessageResponse: MaterialMessageResponse =
      materialResponsePersist;
    setStoreMaterialMessageResponse(materialMessageResponse);
  };

  const composableListMaterial = async (
    data: Promise<MaterialListResponse[]>
  ) => {
    const responseList = await data;
    const listResponse: MaterialListResponse[] = responseList;
    setStoreMaterialListResponse(listResponse);
  };

  return { composableListMaterial, composablePersistMaterial };
};

export default useMaterial;
