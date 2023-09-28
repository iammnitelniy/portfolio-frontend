import styles from './Nav.module.scss'
import React, {FC} from 'react';
import {Drawer, List, ListItem} from "@mui/material";
type Props = {
    open: boolean,
    onClose: (value: boolean) => void
}


const SideDrawer: FC<Props> = ({open, onClose}) => {
    return (
        <Drawer
            anchor="top"
            open={open}
            onClose={()=>{onClose(false)}}
        >
            <List component="nav" className={'style.nav'} >
                <ListItem button onClick={() => console.log("Start Events")}>
                    Event starts in
                </ListItem>

                <ListItem button onClick={() => console.log("React info")}>
                    React info
                </ListItem>

                <ListItem button onClick={() => console.log(" Our Team")}>
                    Our Team
                </ListItem>

                <ListItem button onClick={() => console.log("Pricing")}>
                    Pricing
                </ListItem>

                <ListItem button onClick={() => console.log("Location")}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;