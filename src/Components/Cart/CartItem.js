/* This component apears inside the cart. Each product added is a card with some buttons
a picture, a subtotal display. */
import React from "react"
import { withStyles, Card, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core"

//redux imports:
import { connect } from "react-redux"
import { incrementCartItemQuantity, decrementCartItemQuantity, removeProductFromCart } from "../../actionsAndConstants"

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
		paddingTop: "16px",
		[theme.breakpoints.down("xs")]: {
			paddingTop: "0px !important",
			borderBottom: " 2px solid #ccc",
			marginBottom: theme.spacing.unit * 5,
		},
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
	const { title, img, price, count, company, stock } = props.individualProduct

	return (
		<React.Fragment>
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
									props.dispatch(decrementCartItemQuantity(props.individualProduct))
								}}
								aria-label="Decrement"
								disabled={count === 1 ? true : false}
							>
								<i className="material-icons">remove_circle_outline</i>
							</IconButton>

							{count}

							<IconButton
								disabled={count === stock ? true : false}
								onClick={() => {
									props.dispatch(incrementCartItemQuantity(props.individualProduct))
								}}
								aria-label="Increment"
							>
								<i className="material-icons">add_circle_outline</i>
							</IconButton>
						</div>
						<Typography variant="subtitle1">Subtotal: ${count * price}</Typography>
						Remove Item
						<IconButton
							onClick={() => {
								props.dispatch(removeProductFromCart(props.individualProduct))
							}}
							aria-label="Remove"
						>
							<i className="material-icons">delete</i>
						</IconButton>
					</CardContent>
				</div>
			</Card>
		</React.Fragment>
	)
}

export default connect()(withStyles(styles)(CartItem))
