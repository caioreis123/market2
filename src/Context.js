import React, {Component} from 'react'
import { storeProducts, detailProduct} from './data'

const MyContext = React.createContext()
export const MyConsumer = MyContext.Consumer
export class MyProvider extends Component {
    state = {
        products: [],
        detailProduct,
        cart:[],
        cartTotal: 0,
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
        product.inCart = !product.inCart
        product.count = product.count + 1
        console.log(`the count is: ${product.count}`)
        const price = product.price
        product.total = price
        console.log("clicked the cart")
        console.log(`inCart is equal to ${product.inCart}`)
        this.setState ( ()=>{
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        } )
    }

    increment = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.count = product.count + 1
        this.setState(() => {
            return {
                products: tempProducts,
            }
        })
    }
    
    decrement = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.count === 0 ? product.count = 0 : product.count = product.count - 1
        this.setState(() => {
            return {
                products: tempProducts,
            }
        })
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = !product.inCart
        const indexOfCartItem = this.state.cart.indexOf(product)
        this.state.cart.splice(indexOfCartItem, 1)
        this.setState(() => {
            return {
                products: tempProducts,
                cart: this.state.cart
            }
        })
    console.log(`remove the ${id} id`)
    }

    clearCart = () => {
        this.deepCopyProducts()
        // the deep copy here is to reset all the cart buttons in the store, since we have to change the inCart property of all the products object

        this.setState(() => {
            return {
                cart: []
            }
        })
    }

    render() {
        return (
            <MyContext.Provider value={ {
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
                } }>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}