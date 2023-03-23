import * as actionTypes from "../constants/cartConstants";

export const addToCart = (productId, quantity) => (dispatch) => {
    console.log(productId);
    console.log(quantity);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        someValue: 0,
    })
}
