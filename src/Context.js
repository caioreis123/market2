import React, {Component} from 'react'
import { storeProducts, detailProduct} from './data'

const MyContext = React.createContext()
export const MyConsumer = MyContext.Consumer
export class MyProvider extends Component {
    state = {
        products: [],
        detailProduct,
        cart:[],
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

    getItem = id => {
        const product = this.state.products.find( item => item.id===id )
        return product
    }

    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState( ()=>{
            return {
                detailProduct: product
            }
        } )
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        console.log(`the ID is: ${id}`)
        product.inCart = true
        product.count = product.count + 1
        console.log(`the count is: ${product.count}`)
        const price = product.price
        product.total = price
        this.setState ( ()=>{
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        } )
    }

    render() {
        return (
            <MyContext.Provider value={ {
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                } }>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}