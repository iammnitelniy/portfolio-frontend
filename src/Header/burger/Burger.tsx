import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Nav} from "../nav/Nav";
import styles from "../nav/Nav.module.scss";

const Burger = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);
    };

    return (
        <div>
            <IconButton
                color="inherit"
                onClick={toggleDrawer(true)}
                edge="start"
                aria-label="menu"

            >
                <MenuIcon />
            </IconButton>
            <Drawer
               anchor="top"
              open={isDrawerOpen}
                onClose={toggleDrawer(false)}
               style={{ opacity: '0.5', height: '300px'} }
            >

                <div style={{display: 'flex', flexDirection: 'column',  flexWrap: 'wrap'}} className={styles.nav}>



                    <a href="#homeId" onClick={toggleDrawer(false)}>About</a>
                    <a href='#projectsId' onClick={ toggleDrawer(false)}>Projects</a>
                    <a href="#skillsId" onClick={toggleDrawer(false)}>Skills</a>
                    <a href="#contactsId" onClick={toggleDrawer(false)}>Contacts</a>

                </div>
            </Drawer>
        </div>
    );
};

export default Burger;