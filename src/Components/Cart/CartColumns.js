import React from 'react';
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

function CartColumns(props) {
    const { classes } = props;

    if (props.width === 'xs' || props.width === 'sm') {
        return null
    } else {
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>PRODUCTS</CustomTableCell>
                            <CustomTableCell align="right">NAME OF PRODUCT</CustomTableCell>
                            <CustomTableCell align="right">PRICE</CustomTableCell>
                            <CustomTableCell align="right">QUANTITY</CustomTableCell>
                            <CustomTableCell align="right">REMOVE</CustomTableCell>
                            <CustomTableCell align="right">TOTAL</CustomTableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </Paper>
        );
    }
}

CartColumns.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles, {
        name: 'CartColumns',
    }),
    withWidth(),
)(CartColumns);
