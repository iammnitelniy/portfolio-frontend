import React from "react";
import s from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import linkedin from '../common/images/linkedin.svg';
import git from '../common/images/github.png';
import codewars from '../common/images/codewars.png';
import telegram from '../common/images/telegram-94.png';

type Logo = { logo: string, link: string}

export const Footer = () => {
    const mapForLogo: Logo[] = [
        { logo: linkedin, link: 'https://www.linkedin.com/in/ilia-barabanov-a0a69b262/'},
        { logo: git, link: 'https://github.com/iammnitelniy'},
        { logo: codewars, link: 'https://www.codewars.com/users/Ilia%20Barabanov'},
        { logo: telegram, link: 't.me/iliabarabanov'},
    ];

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={styleContainer.title}>Ilia Barabanov</h2>
                <div className={s.linksBlock}>
                    {mapForLogo.map((logo, index) => (
                        <div key={index} className={s.logo}>
                            <a href={logo.link} target="_blank">

                                <img src={logo.logo} alt={`Logo ${index}`} />
                            </a>
                        </div>
                    ))}
                </div>
                <span className={s.label}>2023 All rights reserved</span>
            </div>
        </div>
    );
};