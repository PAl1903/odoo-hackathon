import axios from "axios";
import { Button, message, Space } from 'antd';
export const newBooking =
  (furnitureBooked, bookedSlot, totalHours, totalAmount, token) =>
  async (dispatch) => {
    try {
      dispatch({ type: "newbookingRequest" });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "/myapp/booking/new",

        {
          furnitureBooked,
          bookedSlot,
          totalHours,
          totalAmount,
          token,
        },
        config
      );
      dispatch({ type: "newbookingSuccess", payload: data.bookingDetails });
      message.success("Booking success");
    } catch (error) {
      dispatch({
        type: "newbookingFailure",
        payload: error.response.data.message,
      });
      message.error(error.response.data.message);
    }
  };
export const getParticularBooking = () => async(dispatch) => {
  try {
    dispatch({ type: "particularBookingRequest" });
    const {data} = await axios.get("/myapp/me/bookings");
    dispatch({type:"particularBookingSuccess",payload:data.allBookings})
  } catch (error) {
    dispatch({type:"particularBookingSuccess",payload:error.response.data.message})
  }
};
export const clearError = () => (dispatch) => {
  dispatch({ type: "clearError" });
};
