/* this component is just to map through the cart state and create the CartItem component that is the one with the cards */
import React from "react"
import CartItem from "./CartItem"

function CartList({ value }) {
	const { cart } = value

	return (
		<div>
			{cart.map((individualProduct) => {
				return <CartItem key={individualProduct.id} individualProduct={individualProduct} value={value} />
			})}
		</div>
	)
}

export default CartList
