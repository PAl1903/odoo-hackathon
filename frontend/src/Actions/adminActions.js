import { message } from "antd";
import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersRequest" });
    const { data } = await axios.get("/myapp/admin/users");
    dispatch({ type: "getAllUsersSuccess", payload: data.allUsers });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllBookings = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllBookingsRequest" });
    const { data } = await axios.get("/myapp/admin/bookings");
    dispatch({ type: "getAllBookingsSuccess", payload: data.allBookings });
  } catch (error) {
    dispatch({
      type: "getAllBookingsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllFurnituresAdmin = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllFurnituresAdminRequest" });
    const { data } = await axios.get("/myapp/furnitures");
    dispatch({ type: "getAllFurnituresAdminSuccess", payload: data.furnitures });
  } catch (error) {
    dispatch({
      type: "getAllFurnituresAdminFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteFurniture = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteFurnitureRequest" });
    const { data } = await axios.delete(`/myapp/admin/furniture/${id}`);
    dispatch({ type: "deleteFurnitureSuccess", payload: data.message });
    message.success("Furniture Deleted Successfully");
  } catch (error) {
    dispatch({
      type: "deleteFurnitureFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteBooking = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteBookingRequest" });
    const { data } = await axios.delete(`/myapp/admin/booking/${id}`);
    dispatch({ type: "deleteBookingSuccess", payload: data.message });
    message.success("Booking Deleted Successfully");
  } catch (error) {
    dispatch({
      type: "deleteBookingFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });
    const { data } = await axios.delete(`/myapp/admin/user/${id}`);
    dispatch({ type: "deleteUserSuccess", payload: data.message });
    message.success("User Deleted Successfully");
  } catch (error) {
    dispatch({
      type: "deleteUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const createFurniture =
  (
    title,
    description,
    rent,
    url,
    category,
    colour
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "createFurnitureRequest" });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "/myapp/admin/furniture/new",
        {
          title,
          description,
          rent,
          url,
          category,
          features: {
            colour
          },
        },
        config
      );
      dispatch({ type: "createFurnitureSuccess", payload: data.furniture });
      message.success("Furniture Created Successfully");
    } catch (error) {
      dispatch({
        type: "createFurnitureFailure",
        payload: error.response.data.message,
      });
      message.error(error.response.data.message);
    }
  };
