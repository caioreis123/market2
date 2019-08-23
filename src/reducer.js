import { INCREMENT_CART_ITEM_QUANTITY, DECREMENT_CART_ITEM_QUANTITY, ADD_PRODUCT_TO_CART } from "./actionsAndConstants"

const initialState = {
	cart: [],
	cartTotalPrice: 0,
	quantitiesInCart: 0,
}

const reducer = (state = initialState, action) => {
	let updatedCart
	let newCartTotalPrice
	let newQuantitiesInCart
	let product

	switch (action.type) {
		case ADD_PRODUCT_TO_CART:
			product = action.payload
			product.count = product.count + 1
			updatedCart = [ ...state.cart, product ]
			updatedCart = [ ...new Set(updatedCart) ]
			product.total = product.count * product.price

			newQuantitiesInCart = state.quantitiesInCart + 1

			newCartTotalPrice = state.cartTotalPrice + product.price
			return {
				...state,
				cart: updatedCart,
				cartTotalPrice: newCartTotalPrice,
				quantitiesInCart: newQuantitiesInCart,
			}

		case DECREMENT_CART_ITEM_QUANTITY:
			return updatedCart

		case INCREMENT_CART_ITEM_QUANTITY:
			updatedCart = [ ...state.cart, product ]
			product = updatedCart[action.payload - 1]
			product.count = product.count + 1
			return { ...state, cart: updatedCart }
		default:
			return state
	}
}

export default reducer
//it is a pure function because it returns an object
