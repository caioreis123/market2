/* this page is shown when the user clicks the img of a product */
import React from 'react'
import { Grid, withStyles, Button, Icon } from '@material-ui/core'
import { MyConsumer } from './../Context'
import { Link } from 'react-router-dom'

//relay imports:
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

const styles = (theme) => ({
    root: {
        width: '70%',
        margin: 'auto',
    },
    img: {
        maxWidth: '400px',
        height: 'auto',
    },
    txt: {
        textAlign: "justify",
    },
    btn: {
        margin: theme.spacing.unit,
    },
    made: {
        textTransform: 'uppercase'
    }
});

const SimpleDetails = props => {
    const { classes } = props;
    return (
        <MyConsumer>
            {value => {
                return (
                    <Grid
                        container
                        direction="row"
                        align="center"
                        alignItems="center"
                        justify='center'
                        className={classes.root}
                    >
                        <Grid item xs={12}>
                            <h1>{props.product.title}</h1>
                        </Grid>
                        <Grid item xs={6} className={classes.img}>
                            <img src={props.product.img} alt='product' />
                        </Grid>
                        <Grid item xs={6} className={classes.txt} justify='flex-start' >
                            <h2 className={classes.made}>MADE BY: {props.product.company}</h2>
                            <h3>Price: ${props.product.price}</h3>
                            <p> <strong>Some Info About the Product: </strong></p>
                            <p>{props.product.info}</p>
                            <Button component={Link} to='/' variant="contained" className={classes.btn}>
                                <Icon>keyboard_backspace</Icon>
                                Back to Store
                            </Button>
                            <Button onClick={() => { value.addToCart(props.product.id) }} variant="contained" color="primary" className={classes.btn}>
                                {"Add to Cart"}
                                <Icon>add_shopping_cart</Icon>
                            </Button>
                        </Grid>
                    </Grid>
                )
            }}
        </MyConsumer>
    )
}

/* let DetailsFragment = {
    products: graphql`
    fragment Details_products on Product{
        id
        title
        img
        price
        subTotal
        count
        company
        info
    }
`} */

const Details = createFragmentContainer(SimpleDetails, {
    product: graphql`
        fragment Details_product on Product{
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
})

export default withStyles(styles)(Details);

//export default withStyles(styles)(Details);

//export default withStyles(styles)(createFragmentContainer(Details, DetailsFragment)(Details));
//export default createFragmentContainer(Details, DetailsFragment)(withStyles(styles)(Details))
