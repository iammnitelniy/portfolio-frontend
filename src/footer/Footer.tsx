import React from "react";
import s from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'



export const Footer = () => {


    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>

                <h2 className={s.title}>Ilia Barabanov</h2>

                <div className={s.linksBlock}>
                    <div className={s.logo}></div>
                    <div className={s.logo}></div>
                    <div className={s.logo}></div>
                    <div className={s.logo}></div>




                </div>


                <span className={s.label}>2023 All rights reserved</span>


            </div>
        </div>
    );
};

