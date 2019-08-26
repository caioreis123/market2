//action creators functions are camelCase, while constants are capitalized_underscore
// exporting every thing

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
export function addProductToCart(product, allProducts) {
	return {
		type: ADD_PRODUCT_TO_CART,
		payload: {
			product,
			allProducts,
		},
	}
}

export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART"
export function removeProductFromCart(product) {
	return {
		type: REMOVE_PRODUCT_FROM_CART,
		payload: product,
	}
}

export const INCREMENT_CART_ITEM_QUANTITY = "INCREMENT_CART_ITEM_QUANTITY"
export function incrementCartItemQuantity(product) {
	return {
		type: INCREMENT_CART_ITEM_QUANTITY,
		payload: product,
	}
}
export const DECREMENT_CART_ITEM_QUANTITY = "DECREMENT_CART_ITEM_QUANTITY"
export function decrementCartItemQuantity(product) {
	return {
		type: DECREMENT_CART_ITEM_QUANTITY,
		payload: product,
	}
}
export const CLEAR_CART = "CLEAR_CART"
export function clearCart(updatedProducts) {
	return {
		type: CLEAR_CART,
		payload: updatedProducts,
	}
}
