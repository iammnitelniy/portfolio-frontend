import React from "react";
import styles from './Header.module.css'
import {Nav} from "./nav/Nav";



export const Header = () => {
    return (
        <div className={styles.header}>
            <img src={'https://media.licdn.com/dms/image/D4D35AQFWtmpZbEE5Vg/profile-framedphoto-shrink_200_200/0/1695216612445?e=1696068000&v=beta&t=x_khzrVfOkrBgVBI-KFG_VNqLwYK1S4bK1PJYAet5KQ'}/>
            <Nav/>


        </div>
    );
};