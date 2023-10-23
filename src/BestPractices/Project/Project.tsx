import s from './Project.module.scss'
import React from "react";

export type SkillProps = {
    image: string
    title: string
    description: string
    way: string
}

export const Project: React.FC<SkillProps> = ({title, description, image, way}) => {
    console.log(way)
    return (





            <div className={s.project} >
                <a href={way} target="_blank" rel="noopener noreferrer" >
                   Click here
                    </a>


                <div className={s.imgContainer}  >


                        <img src={image} alt="IT-prjcts" />





                </div>


                <div className={s.descriptionContainer}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.description}>
                {description}
            </span>

                </div>
            </div>






    );
};

