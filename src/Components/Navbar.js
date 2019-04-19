import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const styles = {
    cart: {
        marginLeft: 'auto',
    },
};

function Navbar(props) {
    const { classes } = props;
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
                    <IconButton component={Link} to="/cart" className={classes.cart} color="inherit" aria-label="Cart">  
                        <i className="material-icons">local_grocery_store</i>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);