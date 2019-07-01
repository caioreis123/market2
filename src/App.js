/* The App.js is the second file in the hierarchy because is child of the Index.js which adds the Context and the Router API.
The App.js will define the 3 different pages of the app: home, details and store */

import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Cart from './Components/Cart/Cart'

// import Cart from './Components/ProductList'
// import Default from './Components/Default'
import Details from './Components/Details'
import ProductList from './Components/ProductList'

//relay imports:
import environment from './environment'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

//root query for relay (it is going to store all the queries of the app):
const AppQuery = graphql`
    query AppQuery ($ID: ProductWhereUniqueInput!) {
        product (where: $ID){
            ...Details_product
        }
        products{
            ...ProductList_products
        }
    }
`

class App extends Component {
    render() {
        //this id is a test only and should be deleted later
        let id = 2
        return (
            <QueryRenderer
                environment={environment}
                query={AppQuery}
                variables={{ ID: { id } }}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (!props) {
                        return <div>Loading...</div>
                    }
                    return <React.Fragment>
                        <Navbar />
                        <Switch>

                            <Route exact path="/" render={(props) => <ProductList {...props} products={props.products} />} />

                            {/*the path is just a bar because is the homepage (localhost:3000), 
                            the second attribute points the component where the rout is going to. 
                            The path must be exact because all the other pages also stars with the single forward slash 
                            so the home page keeps showing in front of the other pages when they are called.  */}

                            <Route path='/details' render={() => <Details {...props} product={props.product} />} />

                            <Route path='/cart' component={Cart} />

                        </Switch>
                    </React.Fragment>
                }}
            />
        );
    }
}

export default App;
