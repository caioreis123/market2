import React from 'react'
import { Grid, withStyles, Button, Icon } from '@material-ui/core'
import {MyConsumer} from './../Context'
import {Link} from 'react-router-dom'

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
    }
});

class Details extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <MyConsumer>
                { value => {
                    const {id,company,img,info,price,title,inCart} = value.detailProduct
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
                                <h1>{title}</h1>
                            </Grid>
                            <Grid item xs={6} className={classes.img}>
                                <img src={img} alt='product' />
                            </Grid>
                            <Grid item xs={6} className={classes.txt} justify='flex-start' >
                                <h2>MADE BY: {company}</h2>
                                <h3>Price: R${price}</h3>
                                <p> <strong>Some Info About the Product: </strong></p>
                                <p>{info}</p>
                                <Button component={Link} to='/' variant="contained" className={classes.btn}>
                                    <Icon>keyboard_backspace</Icon>
                                    Back to Store
                                </Button>
                                <Button variant="contained" color="primary" className={classes.btn}>
                                    Add to Cart
                                    <Icon>add_shopping_cart</Icon>
                                </Button>
                            </Grid>
                        </Grid>
                    )
                } }
            </MyConsumer>
        )
    }
}

export default withStyles(styles)(Details);