import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
  }));

export default function Home() {
    const [recipe, setRecipe] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetch('/database.json')
            .then(response => response.json())
            .then(data => setRecipe(data.slice(0,4)));
    }, []);

  return (
    <Grid container className={classes.root}>
        <Grid item xs={12}>
                <Grid item>
                    <h1>Popularne przepisy</h1>
                </Grid>
                <Grid container justify="center" spacing={3}>
                    { recipe.map((elem, index) =>
                        <Tile recipe={elem} />
                    )}
                </Grid>
                <Grid item>
                    <h1>Dania dnia</h1>
                </Grid>
                <Grid container justify="center" spacing={3}>
                    { recipe.map((elem, index) =>
                        <Tile recipe={elem} />
                    )}
                </Grid>
                <Grid item>
                    <h1>Ostatnio dodane</h1>
                </Grid>
                <Grid container justify="center" spacing={3}>
                    { recipe.map((elem, index) =>
                        <Tile recipe={elem} />
                    )}
                </Grid>
        </Grid>
    </Grid>
  );
}
