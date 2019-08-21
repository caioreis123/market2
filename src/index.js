/* 
1) index.js
2) App.js
3) Context.js
This is the top page in the hierarchy. Here we wrap the App component with the Router and Context API */
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router } from "react-router-dom"
import { MyProvider } from "./Context"

//redux import:
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./reducers/rootReducer"

//relay imports:
import graphql from "babel-plugin-relay/macro"
import { QueryRenderer } from "react-relay"
import environment from "./environment"

const srcQuery = graphql`
	query srcQuery {
		productsConnection {
			...Context_productsConnection
		}
	}
`

const Store = createStore(rootReducer)

ReactDOM.render(
	<QueryRenderer
		environment={environment}
		query={srcQuery}
		variables={{}}
		render={({ props, error }) => {
			if (error) {
				return <div>{error.message}</div>
			} else if (!props) {
				return <div>Loading...</div>
			}
			return (
				<Provider store={Store} productsConnection={props.productsConnection}>
					<MyProvider productsConnection={props.productsConnection}>
						<Router>
							<App />
						</Router>
					</MyProvider>
				</Provider>
			)
		}}
	/>,
	document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
