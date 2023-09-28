import styles from './Nav.module.scss'


export const Nav = () => {
    return (
        <div className={styles.nav}>



            <a href="#homeId">Main</a>
            <a href='#projectsId'>Projects</a>
            <a href="#skillsId">Skills</a>
            <a href="#relocationId">Relocation</a>
            <a href="#contactsId">Contacts</a>

        </div>
    );
};

