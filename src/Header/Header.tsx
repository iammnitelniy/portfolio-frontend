import React from "react";
import styles from './Header.module.css'
import {Nav} from "./nav/Nav";
import portrait from "../common/images/circle.png"
import {AppBar, Hidden, IconButton, Toolbar,} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


export const Header = () => {




    return (
        <div >
            <AppBar position='sticky' >
                <Toolbar className={styles.header}>
                    <img src={portrait} />

                    <Hidden mdUp>

                    </Hidden>
                    <Hidden mdDown>
                        <Nav />
                    </Hidden>
                </Toolbar>

            </AppBar>

        </div>
    );
};