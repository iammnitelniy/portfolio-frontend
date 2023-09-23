import React from 'react';
import s from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';

export const Skills = () => {
    const skillsArray = [1, 2, 3];

    return (
        <section className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
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

