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

export const addToCartSevice = async (data: any) => {
  try {
    const res = await axiosClientWithHeaders.post(`/cart/addToCart`, data);

    console.log(res.data);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
    return err?.response?.data;
  }
};

export const removeFromCartService = async (product: any) => {
  try {
    const res = await axiosClientWithHeaders.delete(`/cart/removeFromCart`, {
      data: {product},
    });
    console.log(res.data);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
    return err?.response?.data;
  }
};
