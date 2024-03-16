import consumeService from './general.service';
import REQUEST_API from '../constants/api.constants';
import {
  Material,
  MaterialListResponse,
  MaterialMessageResponse,
} from '../interface/material.interface';
import useMaterialComposable from '../composables/useMaterialComposable';
import useMaterialStore from '../stores/useMaterialStore';
import Swal from 'sweetalert2';

const { composableListMaterial, composablePersistMaterial } =
  useMaterialComposable();
const dataOperationMaterialStore = useMaterialStore();

const servicesPersistMaterial = async (
  dataCity: Material
): Promise<MaterialMessageResponse> => {
  const response = await consumeService.post(
    REQUEST_API.MATERIAL_SAVE,
    dataCity
  );
  if (response.status == 200) {
    const responseMessage: MaterialMessageResponse = response.data;
    Swal.fire({
      title: 'Detalle de la transacción',
      text: responseMessage.message,
      icon: 'info',
      confirmButtonText: 'ACEPTAR',
    });
    return responseMessage;
  }
  const responseMessage: MaterialMessageResponse = response.data;
  Swal.fire({
    title: 'Error',
    text: responseMessage.message,
    icon: 'error',
    confirmButtonText: 'ACEPTAR',
  });
  return responseMessage;
};

const servicesMaterialListResponse = async (): Promise<
  MaterialListResponse[]
> => {
  const { data } = await consumeService.get(REQUEST_API.MATERIAL_LIST);
  const responseCityList: MaterialListResponse[] = data;
  return responseCityList;
};

const useMaterialService = () => {
  const dataResponseServiceMaterial = () => {
    const dataResponse = composablePersistMaterial(
      servicesPersistMaterial(dataOperationMaterialStore.storeMaterialPersist)
    );
    return dataResponse;
  };

  const dataResponseServiceListMaterial = () => {
    const dataResponse = composableListMaterial(servicesMaterialListResponse());
    return dataResponse;
  };

  return {
    dataResponseServiceMaterial,
    dataResponseServiceListMaterial,
  };
};

export default useMaterialService;
