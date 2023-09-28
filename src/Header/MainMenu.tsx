import React, {useContext, useRef} from 'react';
import styled from 'styled-components';
import styles from '../Header/nav/Nav.module.scss';
import useOnClickOutside from '../hooks/onClickOutside';
import {MenuContext} from '../context/navState';
import HamburgerButton from "../common/components/button/HamburgerButton";
import SideMenu from "./sideDrawer/SideMenu";
import portrait from "../common/images/circle.png"
import {Hidden, Toolbar} from "@mui/material";


const HeaderImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-image: linear-gradient(90deg, #16d166 0%, #20c997 100%);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(15deg);
  }
`;

const Navbar = styled.div`
  display: flex;
  position: -webkit-sticky;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin-bottom: 0px;
  align-items: center;
  background: #212529 none repeat scroll 0% 0%;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 200px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`;

const MainMenu = () => {
    const node: any = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext<any>(MenuContext);
    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <header ref={node} >
            <Navbar className={styles.nav}>
            <Toolbar>
                <Hidden mdUp>


                    <HamburgerButton />

                    <HeaderImage src={portrait} />
                </Hidden>
                <Hidden mdDown >

                    <a href="#homeId">About</a>
                    <a href='#projectsId'>Projects</a>
                    <a href="#skillsId">Skills</a>
                    <a href="#relocationId">Relocation</a>
                    <a href="#contactsId">Contacts</a>
                    <HeaderImage src={portrait} />
                </Hidden>







            </Toolbar>
            </Navbar>

            <SideMenu />
        </header>
    );
};

export default MainMenu;