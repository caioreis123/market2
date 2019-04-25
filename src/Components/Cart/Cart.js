import React from 'react'
import CartColumns from './CartColumns'
import {MyConsumer} from '../../Context'
import EmptyCart from './EmptyCart'
import CartList from './CartList'

export default function Cart() {
  return (
    <MyConsumer>{
        value => {
            const {cart} = value
            if (cart.length > 0) {
                return (
                    <React.Fragment>
                        <h1 style={{ textAlign: "center" }}>YOUR CART</h1>
                        <CartColumns/>
                        <CartList value = {value}/>
                    </React.Fragment>
                )
            } else {
                return <EmptyCart/>
            }
        }
    }
    </MyConsumer>
  )
}
