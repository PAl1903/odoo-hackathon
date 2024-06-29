import {createReducer} from "@reduxjs/toolkit";

const initialState = {};

export const furnitureReducer = createReducer(initialState,{
    allfurnituresRequest:(state)=>{
        state.loading = true;
    },
    allfurnituresSuccess:(state,action)=>{
        state.loading = false;
        state.furnitures = action.payload;
    },
    allfurnituresFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    allfurnituresASCRequest:(state)=>{
        state.loading = true;
    },
    allfurnituresASCSuccess:(state,action)=>{
        state.loading = false;
        state.furnitures = action.payload;
    },
    allfurnituresASCFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    allfurnituresDESCRequest:(state)=>{
        state.loading = true;
    },
    allfurnituresDESCSuccess:(state,action)=>{
        state.loading = false;
        state.furnitures = action.payload;
    },
    allfurnituresDESCFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    particularfurnitureRequest:(state)=>{
        state.loading = true;
    },
    particularfurnitureSuccess:(state,action)=>{
        state.loading = false;
        state.furniture = action.payload;
    },
    particularfurnitureFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    featuredfurnitureRequest:(state)=>{
        state.loading= true;
    },
    featuredfurnitureSuccess:(state,action)=>{
        state.loading = false;
        state.fFurnitures = action.payload;
    },
    featuredfurnitureFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    }
})