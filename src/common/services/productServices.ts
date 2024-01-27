import {axiosClient, axiosClientWithHeaders} from '../helper/axiosInstance';

export const getAllProductsService = async () => {
  try {
    const res = await axiosClient.get(`/product/all`);

    // console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log('Error from service: ', err.response.data.message);
    return err?.response?.data;
  }
};
