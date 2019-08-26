import {
	INCREMENT_CART_ITEM_QUANTITY,
	DECREMENT_CART_ITEM_QUANTITY,
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	CLEAR_CART,
} from "./actionsAndConstants"

const initialState = {
	allProducts: [],
	detailProduct: {},
	cart: [],
	cartTotalPrice: 0,
	quantitiesInCart: 0,
}

const reducer = (state = initialState, action) => {
	let updatedCart
	let updatedAllProducts
	let newCartTotalPrice
	let newQuantitiesInCart
	let product
	let itemIndex

	switch (action.type) {
		case ADD_PRODUCT_TO_CART:
			product = action.payload.product
			product.count = product.count + 1
			product.total = product.count * product.price

			updatedCart = [ ...state.cart, product ]
			updatedCart = [ ...new Set(updatedCart) ]

			newQuantitiesInCart = state.quantitiesInCart + 1
			newCartTotalPrice = state.cartTotalPrice + product.price

			if (action.payload.allProducts) {
				updatedAllProducts = [ ...action.payload.allProducts ]
				itemIndex = updatedAllProducts.indexOf(product)
				updatedAllProducts[itemIndex] = product
			} else updatedAllProducts = state.allProducts

			return {
				...state,
				allProducts: updatedAllProducts,
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

			updatedAllProducts = [ ...state.allProducts ]
			let index = updatedAllProducts.indexOf(action.payload)
			updatedAllProducts[index] = decrementedItem
			//this last update is necessary so the productList has the right amount of each product

			return {
				...state,
				cart: updatedCart,
				cartTotalPrice: newCartTotalPrice,
				quantitiesInCart: newQuantitiesInCart,
				allProducts: updatedAllProducts,
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

			updatedAllProducts = [ ...state.allProducts ]
			index = updatedAllProducts.indexOf(incrementedItem)
			updatedAllProducts[index] = incrementedItem

			return {
				...state,
				cart: updatedCart,
				allProducts: updatedAllProducts,
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

			updatedAllProducts = [ ...state.allProducts ]
			index = updatedAllProducts.indexOf(action.payload)
			updatedAllProducts[index] = product
			//add this updatedProduct back to allProducts so we can update this state

			return {
				...state,
				cart: updatedCart,
				allProducts: updatedAllProducts,
				cartTotalPrice: newCartTotalPrice,
				quantitiesInCart: newQuantitiesInCart,
			}

		case CLEAR_CART:
			let updatedList = action.payload
			updatedCart = []
			newCartTotalPrice = 0
			newQuantitiesInCart = 0
			return {
				...state,
				allProducts: updatedList,
				cart: updatedCart,
				cartTotalPrice: newCartTotalPrice,
				quantitiesInCart: newQuantitiesInCart,
			}

		default:
			return state
	}
}

export default reducer
