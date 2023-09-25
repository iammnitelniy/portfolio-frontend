import React from "react";
import styles from './Header.module.css'
import {Nav} from "./nav/Nav";
import portrait from "../common/images/circle.png"



export const Header = () => {
    return (
        <div className={styles.header}>
            <img src={portrait}/>
            <Nav/>


        </div>
    );
};