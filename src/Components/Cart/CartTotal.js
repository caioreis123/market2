import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Typography, Grid } from "@material-ui/core"

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		paddingRight: "5rem",
		//justifyContent: "spaceBetween",
	},
	total: {
		//float: "center",
	},
	buttonClear: {
		//display: "inlineFlex",
		//marginLeft: "auto",
		//float: "left",
	},
	buttonBuy: {
		//display: "inlineBlock",
		padding: "6px 18px",
		//float: "right",
	},
})

function CartTotal(props) {
	const { classes } = props
	return (
		<Grid container direction="column" justify="space-evenly" alignItems="flex-end" className={classes.root}>
			<Typography className={classes.total} align="center" variant="h5">
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
