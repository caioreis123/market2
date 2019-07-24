import React from "react"
import { Typography, Grid, Button, withStyles } from "@material-ui/core"

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
				Total: ${props.value.cartTotalValue}
			</Typography>
			<Button
				className={classes.buttonClear}
				onClick={() => {
					props.value.deepCopyProducts()
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

export default withStyles(styles)(CartTotal)
