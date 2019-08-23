/* this is the Store main page. Where all the products are displayed */

import React from "react"
import PropTypes from "prop-types"
import { withWidth, IconButton, GridListTileBar, GridListTile, GridList, withStyles } from "@material-ui/core"
import { Link } from "react-router-dom"
import { MyConsumer } from "./../Context"

//redux imports:
import { connect } from "react-redux"
import { addProductToCart } from "../actionsAndConstants"

const styles = (theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	icon: {
		color: "white",
	},
})

const SimpleProductList = (props) => {
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
			{(value) => {
				return (
					<div className={classes.root}>
						<GridList rows={2} cols={responsiveCols()} cellHeight={250}>
							{value.products.map((tile) => (
								<GridListTile key={tile.id}>
									<Link to={`/details/${tile.id}`}>
										<img
											src={tile.img}
											alt={tile.title}
											width="250"
											height="250"
											onClick={() => value.handleDetail(tile)}
										/>
									</Link>
									<GridListTileBar
										title={tile.title}
										subtitle={<span>$: {tile.price}</span>}
										actionIcon={
											<IconButton
												disabled={tile.count === tile.stock ? true : false}
												onClick={() => {
													props.dispatch(addProductToCart(tile))
												}}
												className={classes.icon}
											>
												<i className="material-icons">add_shopping_cart</i>
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
	classes: PropTypes.object.isRequired,
}

const SimpleProductListWithStyles = withStyles(styles)(SimpleProductList)
const SimpleProductListWithStylesWithWidth = withWidth()(SimpleProductListWithStyles)
const ProductList = SimpleProductListWithStylesWithWidth
//export default ProductList
export default connect()(ProductList)
