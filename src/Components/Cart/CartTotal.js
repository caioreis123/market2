import React from "react"
import { Typography, Grid, Button, withStyles } from "@material-ui/core"

//redux imports:
import { connect } from "react-redux"
import { clearCart } from "../../actionsAndConstants"

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		paddingRight: "5rem",
	},
	buttonClear: {
		margin: "15px",
	},
	buttonBuy: {
		padding: "6px 18px",
		marginBottom: "30px",
	},
})

function CartTotal(props) {
	const { classes } = props
	return (
		<Grid container direction="column" justify="space-evenly" alignItems="center" className={classes.root}>
			<Typography align="center" variant="h5">
				Total: ${props.cartTotalPrice}
			</Typography>
			<Button
				className={classes.buttonClear}
				onClick={() => {
					props.dispatch(clearCart())
				}}
				variant="contained"
				color="secondary"
			>
				Clear Cart
			</Button>
			<Button
				onClick={() => {
					props.value.buyMutation()
				}}
				className={classes.buttonBuy}
				color="primary"
				variant="contained"
			>
				Buy it now
			</Button>
		</Grid>
	)
}

const mapStateToProps = (state) => {
	return {
		cartTotalPrice: state.cartTotalPrice,
	}
}

export default connect(mapStateToProps)(withStyles(styles)(CartTotal))
