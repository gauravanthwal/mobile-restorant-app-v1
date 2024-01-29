import {axiosClient, axiosClientWithHeaders} from '../helper/axiosInstance';

export const loginUserService = async (params: any) => {
  try {
    const res = await axiosClient.post(`/user/login`, params);

    // console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log('Error from service: ', err.response.data.message);
    return err?.response?.data;
  }
};

export const registerUserService = async (userInfo: any) => {
  try {
    console.log(userInfo);
    
    const res = await axiosClient.post(`/user/create`, userInfo);

    console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log('Error from service: ', err.response.data.message);
    return err?.response?.data;
  }
};