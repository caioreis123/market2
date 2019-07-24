/* this page is shown when the user clicks at the img of a product */
import React from "react"
import { MyConsumer } from "./../Context"
import { Link } from "react-router-dom"
import { Grid, withStyles, Button, Icon } from "@material-ui/core"

const styles = (theme) => ({
	root: {
		width: "70%",
		margin: "auto",
	},
	img: {
		maxWidth: "400px",
		height: "auto",
	},
	txt: {
		textAlign: "justify",
	},
	btn: {
		margin: theme.spacing.unit,
	},
	made: {
		textTransform: "uppercase",
	},
})

const Details = (props) => {
	const { classes } = props
	return (
		<MyConsumer>
			{(value) => {
				const { id, company, img, info, price, title, count, stock } = value.detailProduct
				return (
					<Grid
						container
						direction="row"
						align="center"
						alignItems="center"
						justify="center"
						className={classes.root}
					>
						<Grid item xs={12}>
							<h1>{title}</h1>
						</Grid>
						<Grid item xs={6} className={classes.img}>
							<img src={img} alt="product" />
						</Grid>
						<Grid item xs={6} className={classes.txt} justify="flex-start">
							<h2 className={classes.made}>MADE BY: {company}</h2>
							<h3>Price: ${price}</h3>
							<p>
								{" "}
								<strong>Some Info About the Product: </strong>
							</p>
							<p>{info}</p>
							<Button component={Link} to="/" variant="contained" className={classes.btn}>
								<Icon>keyboard_backspace</Icon>
								Back to Store
							</Button>
							<Button
								disabled={count === stock ? true : false}
								onClick={() => {
									value.addToCart(id)
								}}
								variant="contained"
								color="primary"
								className={classes.btn}
							>
								{count === stock ? "Sold out" : "Add to Cart"}
								<Icon>add_shopping_cart</Icon>
							</Button>
						</Grid>
					</Grid>
				)
			}}
		</MyConsumer>
	)
}

export default withStyles(styles)(Details)
