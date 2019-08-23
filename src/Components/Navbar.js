import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { withStyles, AppBar, Toolbar, Typography, IconButton, Badge } from "@material-ui/core"

//redux imports:
import { connect } from "react-redux"

const styles = (theme) => ({
	cart: {
		marginLeft: "auto",
	},
	cartValue: {
		marginLeft: ".9rem",
	},
	badge: {
		top: "50%",
		right: -3,
		border: `2px solid ${theme.palette.grey[200]}`,
	},
})

function Navbar(props) {
	const { classes } = props
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton component={Link} to="/" color="inherit" aria-label="Store">
						<i className="material-icons">store</i>
						<Typography variant="h6" color="inherit">
							Store
						</Typography>
					</IconButton>

					<IconButton component={Link} to="/cart" className={classes.cart} color="inherit" aria-label="Cart">
						<Badge badgeContent={props.quantitiesInCart} color="primary" classes={{ badge: classes.badge }}>
							<i className="material-icons">local_grocery_store</i>
						</Badge>
						<Typography className={classes.cartValue} variant="h6" color="inherit">
							${props.cartTotalPrice}
						</Typography>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	)
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
		cartTotalPrice: state.cartTotalPrice,
		quantitiesInCart: state.quantitiesInCart,
	}
}

export default withStyles(styles)(connect(mapStateToProps)(Navbar))
