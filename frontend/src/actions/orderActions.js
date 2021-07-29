import { CLEAR_CART } from "../constants/cartConstants";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_MINE_LIST_FAIL,
  ORDER_MINE_LIST_REQUEST,
  ORDER_MINE_LIST_SUCCESS,
  ORDER_PAYMENT_FAIL,
  ORDER_PAYMENT_REQUEST,
  ORDER_PAYMENT_SUCCESS,
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

export const detailsOrder = orderId => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.get(`/api/orders/${orderId}`, {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    });

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
  }
};
export const payOrder =
  (order, paymentResult) => async (dispatch, getState) => {
    dispatch({ type: ORDER_PAYMENT_REQUEST, payload: paymentResult });
    const {
      userSignin: { userInfo },
    } = getState();

    try {
      const { data } = axios.put(
        `/api/orders/${order._id}/pay`,
        paymentResult,
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: ORDER_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: ORDER_PAYMENT_FAIL, payload: message });
    }
  };

export const listOrderMine = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_MINE_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();

  try {
    const { data } = await axios.get("/api/orders/mine", {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
  }
};
