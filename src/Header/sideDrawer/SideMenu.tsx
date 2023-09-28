import React, { useContext, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from '../../context/navState';

const Menu = styled.nav<{ open: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 400px;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 100px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #212529;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 80%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #d4d1cc;
  font-size: 32px;
  line-height: 120%;
  font-weight: bold;

  &:hover {
    color: #16d166;
    transform: scale(1.15);
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #16d166 0%, #20c997 100%);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

interface SideMenuProps {
    children?: ReactNode;
}

const SideMenu: React.FC<SideMenuProps> = ({ children }) => {
    const { isMenuOpen } = useContext<any>(MenuContext);

    return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
    children: PropTypes.node,
};

SideMenu.defaultProps = {
    children: (
        <>
            <MenuLink href="#homeId">About</MenuLink>
            <MenuLink href="#projectsId">Projects</MenuLink>
            <MenuLink href="#skillsId">Skills</MenuLink>
            <MenuLink href="#relocationId">Relocation</MenuLink>
            <MenuLink href="#contactsId">Contacts</MenuLink>
        </>
    ),
};

export default SideMenu;