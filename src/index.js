/* 
1) index.js
2) Context.js
3) App.js
This is the top page in the hierarchy. Here we wrap the App component with the Router and Context API */
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import ContextProvider from "./Context"

//redux import:
import { createStore } from "redux"
import { Provider as ReduxProvider } from "react-redux"
import reducer from "./reducer"

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

const Store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
				<ReduxProvider store={Store}>
					<ContextProvider productsConnection={props.productsConnection}>
						<Router>
							<App />
						</Router>
					</ContextProvider>
				</ReduxProvider>
			)
		}}
	/>,
	document.getElementById("root"),
)
