import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import {MyConsumer} from './../Context'

const styles = theme => ({
    cart: {
        marginLeft: 'auto',
    },
    cartValue:{
        marginLeft: '.9rem',
    },
    badge: {
        top: '50%',
        right: -3,
        border: `2px solid ${theme.palette.grey[200]}`
    },
});

function Navbar(props) {
    const { classes } = props;
    return (
        <MyConsumer>
            {value => {
                return (    
                    <div>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton component={Link} to = "/" color="inherit" aria-label="Store">
                                    <i className="material-icons">store</i>
                                    <Typography variant="h6" color="inherit">
                                        Store
                                    </Typography>
                                </IconButton>

                                <IconButton 
                                component={Link} 
                                to="/cart" 
                                className={classes.cart} 
                                color="inherit" 
                                aria-label="Cart">
                                    <Badge badgeContent={value.totalInCart} color="primary" classes={{ badge: classes.badge }}>  
                                        <i className="material-icons">local_grocery_store</i>
                                    </Badge>
                                    <Typography className={classes.cartValue} variant="h6" color="inherit">${value.cartTotalValue}</Typography>
                                </IconButton>

                            </Toolbar>
                        </AppBar>
                    </div>
                )
            }}
    </MyConsumer>
    );
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);