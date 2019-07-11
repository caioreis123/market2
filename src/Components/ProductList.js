/* this is the main page: Store. Where all the products are displayed */

import React from "react"
import PropTypes from "prop-types"
import {
  withWidth,
  IconButton,
  GridListTileBar,
  GridListTile,
  GridList,
  withStyles
} from "@material-ui/core"
import { Link } from "react-router-dom"
import { MyConsumer } from "./../Context"

//relay imports:
import graphql from "babel-plugin-relay/macro"
import { createFragmentContainer } from "react-relay"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  icon: {
    color: "white"
  }
})

const SimpleProductList = props => {
  const { classes } = props

  const responsiveCols = () => {
    if (props.width === "sm") {
      return 3
    }
    if (props.width === "xs") {
      return 1
    }
    return 4
  }

  return (
    <MyConsumer>
      {value => {
        return (
          <div className={classes.root}>
            <GridList rows={2} cols={responsiveCols()} cellHeight={250}>
              {props.productsConnection.edges.map(tile => (
                <GridListTile key={tile.node.id}>
                  <Link to={`/details/${tile.node.id}`}>
                    <img
                      src={tile.node.img}
                      alt={tile.node.title}
                      width="250"
                      height="250"
                      onClick={() => value.handleDetail(tile.node.id)}
                    />
                  </Link>
                  <GridListTileBar
                    title={tile.node.title}
                    subtitle={<span>$: {tile.node.price}</span>}
                    actionIcon={
                      <IconButton
                        onClick={() => {
                          value.addToCart(tile.node.id)
                        }}
                        className={classes.icon}
                      >
                        <i class="material-icons">add_shopping_cart</i>
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        )
      }}
    </MyConsumer>
  )
}

SimpleProductList.propTypes = {
  classes: PropTypes.object.isRequired
}

const SimpleProductListWithStyles = withStyles(styles)(SimpleProductList)
const SimpleProductListWithStylesWithWidth = withWidth()(
  SimpleProductListWithStyles
)
const ProductList = createFragmentContainer(
  SimpleProductListWithStylesWithWidth,
  {
    productsConnection: graphql`
      fragment ProductList_productsConnection on ProductConnection {
        edges {
          node {
            id
            title
            img
            price
            subTotal
            count
            company
            info
          }
        }
      }
    `
  }
)

/* const ProductList = createFragmentContainer(SimpleProductListWithStylesWithWidth, {
    products: graphql`
        fragment ProductList_products on Product{
            id
            title
            img
            price
            subTotal
            count
            company
            info
        }
    `
}) */

//export default withStyles(styles)(ProductList);

/* export default compose(
    withStyles(styles, {
        name: 'ProductList',
    }),
    withWidth(),
)(ProductList); */

export default ProductList
