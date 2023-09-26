import React from 'react';
import s from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from './skill/Skill';

export const Skills = () => {
    const skillsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    return (
        <section className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={styleContainer.title}>Skills</h2>
                <div className={s.skills}>
                    {skillsArray.map((el) => (
                        <Skill
                            key={el}
                            description={'HARDCODE LOREM IPSUM DOLOR ATS ARANTES DO NASIMENTU BEG LOYAL'}
                            title={'Hardcode'}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

