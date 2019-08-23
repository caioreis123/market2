import { DECREMENT_CART_ITEM_QUANTITY, ADD_PRODUCT_TO_CART } from "./actionsAndConstants"

const initialState = {
	cart: [],
	cartTotalPrice: 0,
	quantitiesInCart: 0,
}

const reducer = (state = initialState, action) => {
	let updatedCart
	let cartTotalPrice
	let quantitiesInCart

	switch (action.type) {
		case ADD_PRODUCT_TO_CART:
			const product = { ...action.payload }
			product.count = product.count + 1
			product.total = product.count * product.price
			updatedCart = [ ...state.cart, product ]
			updatedCart = [ ...new Set(updatedCart) ]
			quantitiesInCart = updatedCart.length
			cartTotalPrice = state.cartTotalPrice + product.total

			return { ...state, cart: updatedCart, cartTotalPrice, quantitiesInCart }
		case DECREMENT_CART_ITEM_QUANTITY:
			return updatedCart
		default:
			return state
	}
}

export default reducer
//it is a pure function because it returns an object
