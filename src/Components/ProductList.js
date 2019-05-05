import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import {Link} from 'react-router-dom'
import {MyConsumer} from './../Context'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    icon: {
        color: 'white',
    },
});

const ProductList = props =>  {
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
        <MyConsumer>
            {value => {
                return (
                    <div className={classes.root}>
                        <GridList rows={2} cols={responsiveCols()} cellHeight={250}>
                            <GridListTile cols={4} key="Subheader" style={{ height: 'auto' }}>
                            </GridListTile>
                            {value.products.map(tile => (
                                <GridListTile key={tile.id}>
                                    <Link to='/details'>
                                        <img 
                                            src={tile.img} 
                                            alt={tile.title} 
                                            width="250" 
                                            height="250" 
                                            onClick={()=>value.handleDetail(tile.id)} />
                                    </Link>
                                    <GridListTileBar
                                        title={tile.title}
                                        subtitle={<span>$: {tile.price}</span>}
                                        actionIcon={
                                            <IconButton 
                                                onClick={() => { value.addToCart(tile.id) }} 
                                                className={classes.icon}>
                                                <i class="material-icons">add_shopping_cart</i>
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                )
                
            }}
        </MyConsumer>
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