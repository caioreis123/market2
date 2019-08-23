//in here we are going to write all our action creators functions (camelCase)
//and our constants(capitalized_underscore). Exporting every thing.

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
export function addProductToCart(product) {
	return {
		type: ADD_PRODUCT_TO_CART,
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
