import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function CartTotal(props) {
    const {classes} = props
  return (
    <React.Fragment>
        <Typography>
            Total: {props.value.total}
        </Typography>
        <Button onClick={()=> {props.value.clearCart()}} variant="contained" color="secondary" className={classes.button}>
              Clear Cart
        </Button>
    </React.Fragment>
  )
}

export default withStyles(styles)(CartTotal);
