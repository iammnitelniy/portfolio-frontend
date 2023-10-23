import styles from './Nav.module.scss'
import {FC} from "react";






export const Nav= () => {


    return (
        <div className={styles.nav}>



            <a href="#homeId" >About</a>
            <a href='#projectsId' >Projects</a>
            <a href="#skillsId" >Skills</a>
            <a href="#relocationId" >Relocation</a>
            <a href="#contactsId" >Contacts</a>

        </div>
    );
};

