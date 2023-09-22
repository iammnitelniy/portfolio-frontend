import React from "react";
import styles from './Header.module.css'
import {Nav} from "./nav/Nav";



export const Header = () => {
    return (
        <div className={styles.header}>
            <img src={'https://harnishdesign.net/demo/react/simone/demo/images/profile.jpg'}/>
            <Nav/>


        </div>
    );
};