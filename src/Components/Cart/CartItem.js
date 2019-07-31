/* This component apears inside the cart. Each product added is a card with some buttons
a picture, a subtotal display. */
import React from "react"
import PropTypes from "prop-types"
import { withWidth, withStyles, Card, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core"
import compose from "recompose/compose"

const styles = (theme) => ({
	card: {
		display: "flex",
		[theme.breakpoints.down("xs")]: {
			display: "inline",
		},

		marginBottom: theme.spacing.unit * 2,
	},
	cardInfo: {
		paddingBottom: "0px !important",
	},
	cardQtd: {
		paddingTop: "0px !important",
	},
	detailsQuantity: {
		marginLeft: "auto",
	},
	img: {
		width: "auto",
		[theme.breakpoints.down("sm")]: {
			width: 70,
		},
		height: 200,
		paddingLeft: "10rem",
		marginLeft: theme.spacing.unit * 5,
	},
	quantity: {
		display: "flex",
		alignItems: "center",
	},
})

function CartItem(props) {
	const { classes } = props
	const { id, title, img, price, count, company, stock } = props.individualProduct
	const { increment, decrement, removeItem } = props.value

	return (
		<Card className={classes.card}>
			<CardMedia className={classes.img} image={img} title="Product" />
			<div>
				<CardContent className={classes.cardInfo}>
					<Typography component="h5" variant="h5">
						{title}
					</Typography>
					<Typography style={{ textTransform: "uppercase" }} variant="body2" color="textSecondary">
						By {company}
					</Typography>
					<Typography variant="subtitle1">${price}</Typography>
				</CardContent>
			</div>

			<div className={classes.detailsQuantity}>
				<CardContent className={classes.cardQtd}>
					<div className={classes.quantity}>
						<Typography variant="subtitle1">Quantity:</Typography>
						<IconButton
							onClick={() => {
								decrement(id)
							}}
							aria-label="Decrement"
							disabled={count === 1 ? true : false}
						>
							<i class="material-icons">remove_circle_outline</i>
						</IconButton>

						{count}

						<IconButton
							disabled={count === stock ? true : false}
							onClick={() => {
								increment(id)
							}}
							aria-label="Increment"
						>
							<i class="material-icons">add_circle_outline</i>
						</IconButton>
					</div>
					<Typography variant="subtitle1">Subtotal: ${count * price}</Typography>
					Remove Item
					<IconButton
						onClick={() => {
							removeItem(id)
						}}
						aria-label="Remove"
					>
						<i class="material-icons">delete</i>
					</IconButton>
				</CardContent>
			</div>
		</Card>
	)
}

CartItem.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
}

export default compose(
	withStyles(styles, {
		withTheme: true,
		name: "CartItem",
	}),
)(CartItem)
