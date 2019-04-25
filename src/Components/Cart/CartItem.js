import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

function CartItem(props) {
    const {id, title, img, price, total, count} = props.individualProduct
    const {increment, decrement, removeItem} = props.value
    const { classes } = props;

    if (props.width === 'xs' || props.width === 'sm') {
        return null
    } else {
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableBody>
                            <TableRow className={classes.row} key={id}>
                                <CustomTableCell component="th" scope="row">
                                    <i src={img} alt='product' />
                                </CustomTableCell>
                                <CustomTableCell align="right">{title}</CustomTableCell>
                                <CustomTableCell align="right">{price}</CustomTableCell>
                                <CustomTableCell align="right">{count}</CustomTableCell>
                                <CustomTableCell align="right">{()=>removeItem}</CustomTableCell>
                                <CustomTableCell align="right">{total}</CustomTableCell>
                            </TableRow>
                    </TableBody>

                </Table>
            </Paper>
        );
    }

}

CartItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles, {
        name: 'CartItem',
    }),
    withWidth(),
)(CartItem);
