/*
1)index.js
2)Context.js
3)App.js
In this page we define all the functions as the only state of the whole app. 
Both the state and the functions are going to be passed using the context API imported in the index.js file */

import React, { useEffect } from "react"

//relay imports:
import graphql from "babel-plugin-relay/macro"
import { createFragmentContainer, commitMutation } from "react-relay"
import environment from "./environment"

//redux imports:
import { clearCart } from "./actionsAndConstants"
import { connect } from "react-redux"

const MyContext = React.createContext()
export const MyConsumer = MyContext.Consumer

const statelessContextProvider = (props) => {
	useEffect(() => {
		deepCopyProducts()
	}, [])

	function deepCopyProducts() {
		let copiedProductsFromDB = []
		props.productsConnection.edges.forEach((item) => {
			let copiedIndividual = { ...item.node }
			copiedProductsFromDB = [ ...copiedProductsFromDB, copiedIndividual ]
		})
		props.dispatch(clearCart(copiedProductsFromDB))
	}
	//the deep copy is important when the user hits the clear cart button on the cart
	//and then we need some way to reset the total properties of the products objects to 0,
	// this means the default value (original data).
	//If we don't use the deep copy we will always be getting the modify values of total,
	// messing up the total value of the cart.
	//The deepCopyProducts also does the reset in the cart and cartTotalValue states

	const buyMutation = () => {
		props.cart.map((object) => {
			const cartItemId = object.id
			const cartItemNewStock = object.stock - object.count
			let mutation = graphql`
				mutation ContextMutation($ID: ProductWhereUniqueInput!, $changedData: ProductUpdateInput!) {
					updateProduct(where: $ID, data: $changedData) {
						id
						title
						stock
					}
				}
			`
			let variables = {
				ID: { id: cartItemId },
				changedData: { stock: cartItemNewStock },
			}

			commitMutation(environment, {
				mutation,
				variables,
				onCompleted: (response, errors) => {
					alert(
						"Great!! We received your request in our database. Unfortunately this experience only emulates the purchase. Thank you for interacting with this web app.",
					)
					window.location.reload()
				},
				onError: (err) => console.error(err),
			})
		})
		deepCopyProducts()
	}

	return (
		<MyContext.Provider
			value={{
				deepCopyProducts,
				buyMutation,
			}}
		>
			{props.children}
		</MyContext.Provider>
	)
}

const ContextProvider = createFragmentContainer(statelessContextProvider, {
	productsConnection: graphql`
		fragment Context_productsConnection on ProductConnection {
			edges {
				node {
					id
					title
					img
					price
					subTotal
					count
					company
					info
					stock
				}
			}
		}
	`,
})

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	}
}

export default connect(mapStateToProps)(ContextProvider)
