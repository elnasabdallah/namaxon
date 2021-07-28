import { CLEAR_CART } from "../constants/cartConstants";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "../constants/orderConstants";
import axios from "axios";

export const createOrder = order => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payload: order });

  try {
    const {
      userSignin: { userInfo },
    } = getState();

    const { data } = await axios.post("/api/orders", order, {
      headers: { authorization: `Bearer ${userInfo.token}` },
    });

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: CLEAR_CART });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
