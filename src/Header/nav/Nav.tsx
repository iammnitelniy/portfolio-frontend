import styles from './Nav.module.scss'


export const Nav = () => {
    return (
        <div className={styles.nav}>

            <a href="#">Home</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Relocation</a>
            <a href="#">Contacts</a>


        </div>
    );
};

