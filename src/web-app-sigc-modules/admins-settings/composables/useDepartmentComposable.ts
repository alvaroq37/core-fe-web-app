import {
  DepartmentMessageResponse,
  DepartmentListResponse,
} from '../interface/department.interface';
import useDepartmentStore from '../stores/useDepartmentStore';

const useDepartment = () => {
  const { setStoreDepartmentListResponse, setStoreDepartmentMessageResponse } =
    useDepartmentStore();

  const composableDepartmentPersist = async (
    data: Promise<DepartmentMessageResponse>
  ) => {
    const departmentResponsePersist = await data;
    const departmentMessageResponse: DepartmentMessageResponse =
      departmentResponsePersist;
    setStoreDepartmentMessageResponse(departmentMessageResponse);
  };

  const composableDepartmentListResponse = async (
    data: Promise<DepartmentListResponse[]>
  ) => {
    const responseList = await data;
    const listResponse: DepartmentListResponse[] = responseList;
    setStoreDepartmentListResponse(listResponse);
  };

  return { composableDepartmentPersist, composableDepartmentListResponse };
};

export default useDepartment;
