import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { storeProducts } from '../data';
//import SingleProduct from './SingleProduct'
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import {Link} from 'react-router-dom'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        //width: 500,
        //height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

function ProductList(props) {
    const { classes } = props;

    const responsiveCols = () => {
        if (props.width === 'sm') {
            return 3
        }
        if (props.width === 'xs') {
            return 1
        }
        return 4
    }

    return (
        <div className={classes.root}>
            <GridList rows={2} cols={responsiveCols()} cellHeight={250} className={classes.gridList}>
                <GridListTile cols={4} key="Subheader" style={{ height: 'auto' }}>
                </GridListTile>
                {storeProducts.map(tile => (
                 //<SingleProduct>     
                        <GridListTile key={tile.id}>
                        <Link to='/details'>
                            <img src={tile.img} alt={tile.title} width="250" height="250" />
                        </Link> 
                        {/* <SingleProduct/> */}
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>R$: {tile.price}</span>}
                                actionIcon={
                                    <IconButton onClick={()=>console.log('added to cart')} className={classes.icon}>
                                        <i class="material-icons">add_shopping_cart</i>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                //</SingleProduct>
                ))}
            </GridList>
        </div>
    );
}

ProductList.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(ProductList);

export default compose (
    withStyles(styles, {
        name: 'ProductList',
    }),
    withWidth(),
)(ProductList);

/*
import React, { Component, Fragment } from 'react'
import SingleProduct from './SingleProduct'

export default class ProductList extends Component {
    state = {
        products: []
    }
    render() {
        return (
            <Fragment>
                <SingleProduct />
            </Fragment>
        )
    }
} */
