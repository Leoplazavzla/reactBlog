import React from "react";
import {Menu as MenuIcon} from "@material-ui/icons"
//import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import Strings from "../../resources/Strings"
import {Link} from "react-router-dom";
import {paths} from "../../resources/paths"

const useStyles = makeStyles(theme => ({
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]:{
                display: 'none'
            }
        },
        title: {
            flexGrow: 1
        },
    appBar: {
        [theme.breakpoints.up('sm')]:{
            width: `calc(100% - ${240}px)`,
            marginLeft: 240
        }

    },

        toolbar: theme.mixins.toolbar,

    })
)

const NavBar = (props) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} color={"primary"} position={"sticky"}>
            <Toolbar>
                <IconButton onClick={props.handleDrawerOpen} className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon/>
                </IconButton>
                <Typography
                    variant={"h6"}
                    className={classes.title}
                >
                    <Button style={{color: 'white', textDecoration: 'none'}} href={paths.home}>
                        {Strings.app.name}
                    </Button>
                </Typography>
                <Button variant={"text"} color={"inherit"}>{Strings.navBar.login}</Button>
                <Button variant={"text"} color={"inherit"}>{Strings.navBar.register}</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;