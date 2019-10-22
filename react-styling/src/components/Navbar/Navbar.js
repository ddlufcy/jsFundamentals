import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    color: {
        backgroundColor: '#0f0d11',
    }
  });

const Navbar = () => {
    const classes = useStyles();
    return(
       <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.color}>
                    <Typography variant="h6" id="navTitle" className={classes.title}>
                        Record Revolution
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
    </div>  
    )
}

export default Navbar;