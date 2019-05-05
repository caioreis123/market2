import React, {Component} from 'react'
import { storeProducts, detailProduct} from './data'

const MyContext = React.createContext()
export const MyConsumer = MyContext.Consumer
export class MyProvider extends Component {
    state = {
        products: [],
        detailProduct,
        cart:[],
        cartTotalValue: 0,
    }

    componentDidMount(){
        this.deepCopyProducts()
        //the deep copy should run as soon as possible so we can get the original data
    }

    deepCopyProducts = () => {
        let copiedProducts = []
        storeProducts.forEach( individualProductObject => {
            let copiedIndividual = {...individualProductObject}
            copiedProducts = [...copiedProducts, copiedIndividual]
        } )
        this.setState( () => {
           return {
               products: copiedProducts,
                cartTotalValue: 0,
                cart: [],
            }
        } )
    }
    //the deep copy is important when the user hits the clear cart button on the cart 
    //and then we need some way to reset the total properties of the products objects to 0,
    // this means the default value (original data). 
    //If we don't use the deep copy we will always be getting the modify values of total,
    // messing up the total value of the cart.
    //The deepCopyProducts also does the reset in the cart and cartTotalValue states

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
        product.inCart = !product.inCart
        product.count = product.count + 1

        product.total = product.price
        //change the total property of the products object in the cart so the calculateTotal function can work with this values

        this.setState ( ()=>{
            return {
                products: tempProducts,
                cart: [...this.state.cart, product],
                //while products is a deep copy of all the data with the new changes made by the add cart
                //the cart state is just the data of the products added to the cart also with the changes
            }
        },() => {this.calculateTotal()} )
        console.log(`this is products ${this.state.products}`)
        console.log(`this is cart ${this.state.cart}`)
    }

    increment = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.count = product.count + 1
        product.total = product.count * product.price
        this.setState(() => {
            return {
                products: tempProducts,
            }
        }, () => { this.calculateTotal() })
    }
    
    decrement = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.count = product.count - 1
        product.total = product.count * product.price
        this.setState(() => {
            return {
                products: tempProducts,
            }
        }, () => { this.calculateTotal() })
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]

        product.inCart = !product.inCart
        product.total = 0
        product.count = 0
        //will reset this 3 values of the removed product so when the user added it again does not mess up our total value of the cart and our counter of the amout of product and enable back the add to cart button

        let tempCart = [...this.state.cart]
        const indexOfCartItem = tempCart.indexOf(product)
        tempCart.splice(indexOfCartItem, 1)
        //will remove the item from cart

        this.setState(() => {
            return {
                products: tempProducts,
                cart: tempCart
            }
        }, () => { this.calculateTotal() })
    }

    calculateTotal = () => {
        let totalToPay = 0
        this.state.cart.map(item => (totalToPay = totalToPay + item.total))
        this.setState(() => {
            return {
                cartTotalValue: totalToPay
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
                deepCopyProducts: this.deepCopyProducts,
                } }>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}