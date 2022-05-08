import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
import { ContextCart } from "./ContextCart";
import { reducer } from "./reducer";
import { products } from "./products";

 export const CartContext = createContext();
 const initialState ={
    item:products,
    totalAmount:0,
    totalItem:0,
 };

export const Cart = () => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const  removeItem = (id)=>{
      return dispatch({
         type:"REMOVE_ITEM",
         payload: id,
      })
   };
   const increment = (id) => {
      return dispatch({
        type: "INCREMENT",
        payload: id,
      });
    };

    const decrement = (id) => {
      return dispatch({
        type: "DECREMENT",
        payload: id,
      });
    };

    useEffect(() => {
      dispatch({ type: "GET_TOTAL" });
      
    }, [state.item]);
   // const [item, setItem] = useState(products)
   return (
      <>
      <CartContext.Provider value={{ ...state, removeItem, increment, decrement}}>

        <ContextCart />
      </CartContext.Provider>

      </>

   )

}