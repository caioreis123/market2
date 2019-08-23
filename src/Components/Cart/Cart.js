import React from "react"
import { MyConsumer } from "../../Context"
import EmptyCart from "./EmptyCart"
import CartList from "./CartList"
import CartTotal from "./CartTotal"

//redux imports:
import { connect } from "react-redux"

function Cart(props) {
	return (
		<MyConsumer>
			{(value) => {
				if (props.cart.length > 0) {
					return (
						<React.Fragment>
							<h1 style={{ textAlign: "center" }}>YOUR CART</h1>
							<CartList value={value} />
							<CartTotal value={value} />
						</React.Fragment>
					)
				} else {
					return <EmptyCart />
				}
			}}
		</MyConsumer>
	)
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
		cartTotalPrice: state.cartTotalPrice,
		quantitiesInCart: state.quantitiesInCart,
	}
}
export default connect(mapStateToProps)(Cart)
