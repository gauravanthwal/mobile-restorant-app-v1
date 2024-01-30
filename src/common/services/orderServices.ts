import {axiosClient, axiosClientWithHeaders} from '../helper/axiosInstance';

export const getMyOrdersService = async () => {
  try {
    const res = await axiosClientWithHeaders.get(`/order/getByUserId`);

    // console.log(res?.data);

    return res?.data;
  } catch (err: any) {
    console.log('Error from service: ', err.response.data.message);
    return err?.response?.data;
  }
};

export const createNewOrderService = async (data: any) => {
  try {
    const res = await axiosClientWithHeaders.post(`/order/new`, data);
    
    console.log(res.data);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
    return err?.response?.data;
  }
};
