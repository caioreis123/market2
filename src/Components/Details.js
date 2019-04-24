import React from 'react'
import { Grid, withStyles } from '@material-ui/core'
import testImage from '../product-1.png'
import {MyConsumer} from './../Context'

const styles = () => ({
    root: {
        width: '70%',
        margin: 'auto',
    },
    img: {
        maxWidth: '400px',
        height: 'auto',
        // width: 'auto',
        // maxHeight: '400px',

    },
    txt: {
        textAlign: "justify",
    }
});

const Details = (props) => {
    const { classes } = props;

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
                <h1>Samsung X</h1>
            </Grid>
            <Grid className={classes.img} item xs={6} >
                <img src={testImage} alt='product' />
            </Grid>
            <Grid className={classes.txt} item xs={6} justify='flex-start' >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, cum! Ratione deleniti incidunt, quasi nisi aperiam dolores mollitia obcaecati corporis.</p>
            </Grid>
        </Grid>
    )
}


export default withStyles(styles)(Details);

