import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    // playIcon: {
    //     height: 38,
    //     width: 38,
    // },
});

function CardItem(props) {
    const { classes, theme } = props;
    const { id, title, img, price, total, count } = props.individualProduct
    const {increment, decrement, removeItem} = props.value

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image={img}
                title="Product"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        ${price}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="Decrement">
                        <i class="material-icons">
                            remove_circle_outline
                        </i>
                    </IconButton>

                    {count}
                    
                    <IconButton aria-label="Increment">
                        <i class="material-icons">
                            add_circle_outline
                        </i>
                    </IconButton>
                </div>
            </div>
        </Card>
    );
}

CardItem.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardItem);


// import React from 'react'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import withWidth from '@material-ui/core/withWidth';
// import compose from 'recompose/compose';

// const CustomTableCell = withStyles(theme => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);

// const styles = theme => ({
//     root: {
//         width: '100%',
//         marginTop: theme.spacing.unit * 3,
//         overflowX: 'auto',
//     },
//     table: {
//         minWidth: 700,
//     },
//     row: {
//         '&:nth-of-type(odd)': {
//             backgroundColor: theme.palette.background.default,
//         },
//     },
// });

// function CartItem(props) {
//     const {id, title, img, price, total, count} = props.individualProduct
//     const {increment, decrement, removeItem} = props.value
//     const { classes } = props;

//     if (props.width === 'xs' || props.width === 'sm') {
//         return null
//     } else {
//         return (
//             <Paper className={classes.root}>
//                 <Table className={classes.table}>
//                     <TableBody>
//                             <TableRow className={classes.row} key={id}>
//                                 <CustomTableCell component="th" scope="row">
//                                     <i src={img} alt='product' />
//                                 </CustomTableCell>
//                                 <CustomTableCell align="right">{title}</CustomTableCell>
//                                 <CustomTableCell align="right">{price}</CustomTableCell>
//                                 <CustomTableCell align="right">{count}</CustomTableCell>
//                                 <CustomTableCell align="right">{()=>removeItem}</CustomTableCell>
//                                 <CustomTableCell align="right">{total}</CustomTableCell>
//                             </TableRow>
//                     </TableBody>

//                 </Table>
//             </Paper>
//         );
//     }

// }

// CartItem.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default compose(
//     withStyles(styles, {
//         name: 'CartItem',
//     }),
//     withWidth(),
// )(CartItem);
