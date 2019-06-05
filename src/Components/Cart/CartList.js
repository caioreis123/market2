import React from 'react'
import CartItem from './CartItem'
import { createFragmentContainer, graphql } from 'react-relay'

function CartList({ value }) {
    const { cart } = value

    return (
        <div>
            {cart.map((individualProduct) => {
                return <CartItem
                    key={individualProduct.id}
                    individualProduct={individualProduct}
                    value={value}
                />

            })}
        </div>
    )
}

export default createFragmentContainer(CartList, graphql`
    fragment 
`)