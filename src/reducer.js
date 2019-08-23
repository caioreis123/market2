import {
	INCREMENT_CART_ITEM_QUANTITY,
	DECREMENT_CART_ITEM_QUANTITY,
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	CLEAR_CART,
} from "./actionsAndConstants"

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
	let itemIndex

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
			updatedCart = [ ...state.cart ]
			itemIndex = updatedCart.indexOf(action.payload)
			const decrementedItem = {
				...updatedCart[itemIndex],
			}
			decrementedItem.count--
			decrementedItem.total = decrementedItem.count * decrementedItem.price
			updatedCart[itemIndex] = decrementedItem

			newQuantitiesInCart = state.quantitiesInCart - 1

			newCartTotalPrice = state.cartTotalPrice - decrementedItem.price

			return {
				...state,
				cart: updatedCart,
				cartTotalPrice: newCartTotalPrice,
				quantitiesInCart: newQuantitiesInCart,
			}

		case INCREMENT_CART_ITEM_QUANTITY:
			updatedCart = [ ...state.cart ]
			itemIndex = updatedCart.indexOf(action.payload)
			const incrementedItem = {
				...updatedCart[itemIndex],
			}
			incrementedItem.count++
			incrementedItem.total = incrementedItem.count * incrementedItem.price

			updatedCart[itemIndex] = incrementedItem

			newQuantitiesInCart = state.quantitiesInCart + 1

			newCartTotalPrice = state.cartTotalPrice + incrementedItem.price

			return {
				...state,
				cart: updatedCart,
				cartTotalPrice: newCartTotalPrice,
				quantitiesInCart: newQuantitiesInCart,
			}

		case REMOVE_PRODUCT_FROM_CART:
			updatedCart = [ ...state.cart ]
			itemIndex = updatedCart.indexOf(action.payload)
			product = updatedCart[itemIndex]
			updatedCart.splice(itemIndex, 1)

			newQuantitiesInCart = state.quantitiesInCart - product.count

			newCartTotalPrice = state.cartTotalPrice - product.total

			product.total = 0
			product.count = 0

			return {
				...state,
				cart: updatedCart,
				cartTotalPrice: newCartTotalPrice,
				quantitiesInCart: newQuantitiesInCart,
			}

		case CLEAR_CART:
			updatedCart = []
			newCartTotalPrice = 0
			newQuantitiesInCart = 0
			return {
				...state,
				cart: updatedCart,
				cartTotalPrice: newCartTotalPrice,
				quantitiesInCart: newQuantitiesInCart,
			}

		default:
			return state
	}
}

export default reducer
