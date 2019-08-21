//in here we are going to write all our action creators functions (camelCase)
//and our constants(capitalized_underscore). Exporting every thing.

export const DECREMENT = "DECREMENT"
export function decrement(id) {
	return { type: DECREMENT, id }
}
