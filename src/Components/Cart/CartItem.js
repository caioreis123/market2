/* This component apears inside the cart. Each product added is a card with some buttons
a picture, a subtotal display. */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import compose from 'recompose/compose'
import { createFragmentContainer, graphql } from 'react-relay'
//import graphql from 'babel-plugin-relay/macro';

const styles = theme => ({
    card: {
        display: 'flex',
    },
    detailsProduct: {
        // display: 'flex',
        // flexDirection: 'column',
    },
    detailsQuantity: {
        // display: 'flex',
        marginLeft: "auto",

    },
    column: {
        // flex: '1 0 auto',
    },
    columnQuantity: {

    },
    img: {
        width: "auto",
        height: 200,
        paddingLeft: "10rem",
    },
    quantity: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
});

function CartItem(props) {
    const { classes, theme } = props;
    const { id, title, img, price, total, count, company } = props.individualProduct
    const { increment, decrement, removeItem } = props.value

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.img}
                image={img}
                title="Product"
            />
            <div className={classes.detailsProduct}>
                <CardContent className={classes.column}>
                    <Typography component="h5" variant="h5">
                        {title}
                    </Typography>

                    <Typography style={{ textTransform: 'uppercase' }} variant="body2" color="textSecondary">
                        By {company}
                    </Typography>

                    <Typography variant="subtitle1">
                        ${price}
                    </Typography>
                </CardContent>
            </div>

            <div className={classes.detailsQuantity}>
                <CardContent className={classes.columnQuantity}>
                    <div className={classes.quantity}>
                        <Typography variant="subtitle1">
                            Quantity:
                        </Typography>
                        <IconButton
                            onClick={() => { decrement(id) }}
                            aria-label="Decrement"
                            disabled={count === 1 ? true : false}>
                            <i class="material-icons">
                                remove_circle_outline
                            </i>
                        </IconButton>

                        {count}

                        <IconButton onClick={() => { increment(id) }} aria-label="Increment">
                            <i class="material-icons">
                                add_circle_outline
                            </i>
                        </IconButton>


                    </div>
                    <Typography variant="subtitle1">
                        Subtotal: ${count * price}
                    </Typography>

                    Remove Item
                        <IconButton onClick={() => { removeItem(id) }} aria-label="Remove">
                        <i class="material-icons">
                            delete
                                </i>
                    </IconButton>

                </CardContent>
            </div>

        </Card>
    );
}

CartItem.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

//export default withStyles(styles, { withTheme: true })(CardItem);

export default compose(
    createFragmentContainer(CartItem, graphql`
        CartItem_individualProduct on CartItem{
            id
            title
            img
            price
            total
            count
            company
        }
    `),

    withStyles(styles, {
        withTheme: true,
        name: 'CartItem',
    }),
)(CartItem);