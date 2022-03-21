import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core';
import Header from './components/Header';
import CoinsTable from './components/CoinsTable';
import Banner from './components/banner/Banner';

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
 const classes = useStyles()
  return (
    <div className={classes.app}>
        <Header/>
        <Banner/>
        <CoinsTable/>

    </div>
  );
}


export default App;
