import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      padding: theme.spacing(2),
  },
  image: {
      maxHeight: 128,
      maxWidth: 222,
  },
  link: {
      FontSize: 23,
      color: 'black',
      textDecoration: 'none',
  },
  gridName:{
      textAlign: 'center',
  },
  button:{
      fontSize: 23,
  }
}));

export default function Tile(props) {
  const classes = useStyles();
  const { recipe } = props;

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Grid item>
          <img className={classes.image} src={`images/${recipe.image}`}  alt={recipe.title} />
        </Grid>
        <Grid item  className={classes.gridName}>
          <ButtonBase className={classes.button}>
            {recipe.title}
          </ButtonBase>
        </Grid>
      </Paper>
    </Grid>
  );
}
