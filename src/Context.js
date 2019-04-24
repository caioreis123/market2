import React, {Component} from 'react'
import { storeProducts, detailProduct} from './data'

const MyContext = React.createContext()

export class MyProvider extends Component {
    state = {
        products: [],
        detailProduct
    }

    componentDidMount(){
        this.deepCopyProducts()
    }

    deepCopyProducts = () => {
        let copiedProducts = []
        storeProducts.forEach( individualProductObject => {
            let copiedIndividual = {...individualProductObject}
            copiedProducts = [...copiedProducts, copiedIndividual]
        } )
        this.setState( () => {
           return {products: copiedProducts}
        } )
    }

    render() {
        return (
            <MyContext.Provider value={ {...this.state} }>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export const MyConsumer = MyContext.Consumer