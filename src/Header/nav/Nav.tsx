import styles from './Nav.module.scss'


export const Nav = () => {
    return (
        <div className={styles.nav}>

            <a href="skillsId">Home</a>
            <a href="projectsId">Skills</a>
            <a href="relocationId">Projects</a>
            <a href="contactsId">Relocation</a>
            <a href="footerId">Contacts</a>


        </div>
    );
};

