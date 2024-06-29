import axios from "axios";
import { Button, message, Space } from 'antd';
export const getallFurnitures = () => async (dispatch) => {
  try {
    dispatch({ type: "allfurnituresRequest" });
    const { data } = await axios.get("/myapp/furnitures");
    dispatch({ type: "allfurnituresSuccess", payload: data.furnitures });
  } catch (error) {
    dispatch({ type: "allfurnituresFailure", payload: error.message });
  }
};

export const getASCfurnitures = () => async(dispatch) => {
try {
  dispatch({type:"allfurnituresASCRequest"});
  const {data} = await axios.get("/myapp/furnitures/sort/ascending");
  dispatch({type:"allfurnituresASCSuccess",payload:data.furnitures});
} catch (error) {
  dispatch({type:"allfurnituresASCFailure",payload:error.message})
}
}

export const getDESCfurnitures = () => async(dispatch) => {
  try {
    dispatch({type:"allfurnituresDESCRequest"});
    const {data} = await axios.get("/myapp/furnitures/sort/descending");
    dispatch({type:"allfurnituresDESCSuccess",payload:data.furnitures});
  } catch (error) {
    dispatch({type:"allfurnituresDESCFailure",payload:error.message})
  }
  }

export const getparticularFurniture = (id) => async(dispatch) => {
try {
  dispatch({type:"particularfurnitureRequest"});
  const {data} = await axios.get(`/myapp/furniture/${id}`);
  dispatch({type:"particularfurnitureSuccess",payload:data.furniture});
} catch (error) {
  dispatch({type:"particularfurnitureFailure",payload:error.response.data.message})
}
}

export const getFeaturedFurnitures = () => async(dispatch) => {
try {
  dispatch({type:"featuredfurnitureRequest"});
  const {data} = await axios.get("/myapp/furnitures?featured=true");
  dispatch({type:"featuredfurnitureSuccess",payload:data.furnitures})
} catch (error) {
  dispatch({type:"featuredfurnitureFailure",payload:error.response.data.message})
}
}