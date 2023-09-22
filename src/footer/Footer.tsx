import React from "react";
import s from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'



export const Footer = () => {

const mapForLogo = [
    {logo: '../common/images/icons8-git-50.png'},{logo: 'https://motor.ru/imgs/2021/09/24/07/4914200/c319281d3dac3c5845342a4e3bbdc09dc9279d31.jpg'},{logo: '../common/images/icons8-git-50.png'},{logo: '../common/images/icons8-git-50.png'},
]
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>

                <h2 className={s.title}>Ilia Barabanov</h2>

                <div className={s.linksBlock}>

                    {mapForLogo.map((logo , index)=> <div key={index} className={s.logo}>
                        <img src={logo.logo}/>

                    </div>)}






                </div>


                <span className={s.label}>2023 All rights reserved</span>


            </div>
        </div>
    );
};

