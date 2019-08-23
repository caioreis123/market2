/* this component is just to map through the cart state and create the CartItem component that is the one with the cards */
import React from "react"
import CartItem from "./CartItem"

//redux imports:
import { connect } from "react-redux"

function CartList(props) {
	return (
		<div>
			{props.cart.map((individualProduct) => {
				return <CartItem key={individualProduct.id} individualProduct={individualProduct} />
			})}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
		cartTotalPrice: state.cartTotalPrice,
		quantitiesInCart: state.quantitiesInCart,
	}
}

export default connect(mapStateToProps)(CartList)
