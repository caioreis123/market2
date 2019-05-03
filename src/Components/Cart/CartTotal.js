import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    button: {
        // margin: theme.spacing.unit,
        display: "flex",
        margin: "auto",
    }
});

function CartTotal(props) {
    const {classes} = props
  return (
      <div>
        <Typography align="center" variant="h5" >
            Total: ${props.value.cartTotalValue}
        </Typography>
          <Button onClick={()=> {props.value.clearCart()}} variant="contained" color="secondary" className={classes.button}>
              Clear Cart
        </Button>
    </div>
  )
}

export default withStyles(styles)(CartTotal);
