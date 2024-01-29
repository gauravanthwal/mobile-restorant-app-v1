import {axiosClient, axiosClientWithHeaders} from '../helper/axiosInstance';

export const getMyCartItemsService = async () => {
  try {
    const res = await axiosClientWithHeaders.get(`/cart/getByUser`);

    // console.log(res?.data);

    return res?.data;
  } catch (err: any) {
    console.log('Error from service: ', err.response.data.message);
    return err?.response?.data;
  }
};
