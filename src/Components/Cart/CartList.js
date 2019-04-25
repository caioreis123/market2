import React from 'react'
import CartItem from './CartItem'

export default function CartList({value}) {
    const {cart} = value

  return (
    <div>
     {cart.map( (individualProduct) =>{
        return <CartItem
        key={individualProduct.id}
        individualProduct={individualProduct}
        value={value}
        />

     } )}
    </div>
  )
}
