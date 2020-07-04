import React, { useEffect, useState } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 10,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: 20,
    },
}));

const State = () => {
    const classes = useStyles();

    let [globalState, setGlobalState] = useState([{}]);
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            console.log(Object.values(Object.values(data)[1]));
            setGlobalState(Object.values(Object.values(data)[1]))
        }
        getData()
    }, [])
    return (
        <div className="container">
            <div className="row justify-content-center mt-5 heading">
                <h1>Covid Cases By States</h1>
            </div>
            <Grid container spacing={3} >
                {globalState.map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper className={classes.paper}>
                                <Typography variant="h5"  style={{ color: 'black' }} gutterBottom>
                                    {globalState[ind].Country}
                                </Typography>
                                <Typography variant="subtitle1"  gutterBottom >
                                    Infected: {globalState[ind].TotalConfirmed}
                                </Typography>
                                <Typography variant="subtitle1"  gutterBottom >
                                    New Infected: {globalState[ind].NewConfirmed}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Recovered: {globalState[ind].TotalRecovered}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    New Recovered: {globalState[ind].NewRecovered}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Deaths: {globalState[ind].TotalDeaths}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                   New Deaths: {globalState[ind].NewDeaths}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                   Last Date: {new Date(globalState[ind].Date).toDateString()}
                                </Typography>
                            </Paper>
                        </Grid>

                    )
                })}
            </Grid>


            {/* 
                
            </Grid> */}
        </div>
    );
}

export default State;