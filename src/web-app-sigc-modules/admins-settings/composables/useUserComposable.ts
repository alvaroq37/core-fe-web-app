import {
  UserMessageResponse,
  UserListResponse,
} from '../interface/user.interface';
import useUserStore from '../stores/useUserStore';

const useUser = () => {
  const { setStoreUserListResponse, setStoreUserMessageResponse } =
    useUserStore();

  const composablePersistUser = async (data: Promise<UserMessageResponse>) => {
    const userResponsePersist = await data;
    const userMessageResponse: UserMessageResponse = userResponsePersist;
    setStoreUserMessageResponse(userMessageResponse);
  };

  const composableListUser = async (data: Promise<UserListResponse[]>) => {
    const responseList = await data;
    const listResponse: UserListResponse[] = responseList;
    setStoreUserListResponse(listResponse);
  };

  return { composableListUser, composablePersistUser };
};

export default useUser;
