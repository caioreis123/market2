/* 
1) index.js
2) Context.js
3) App.js
The App.js will define the 3 different pages of the app: home, details and store 
*/

import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Cart from "./Components/Cart/Cart"
import Details from "./Components/Details"
import ProductList from "./Components/ProductList"

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={ProductList} />

					{/*the path is just a bar because is the homepage (localhost:3000), 
                the second attribute points the component where the rout is going to. 
                The path must be exact because all the other pages also stars with the single forward slash 
                so the home page keeps showing in front of the other pages when they are called.  */}

					<Route path="/details/:id" render={(props) => <Details {...props} />} />

					<Route path="/cart" component={Cart} />
				</Switch>
			</React.Fragment>
		)
	}
}

export default App
