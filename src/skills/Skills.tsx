import React from 'react';
import s from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from './skill/Skill';

type SkillType = {id: number,title: string, description: string}

export const Skills = () => {
    const skillsArray: SkillType[]= [
        {id: 1, title: 'JavaScript', description: 'Functional and OOP'},
        {id: 2, title: 'React', description: 'Creating feature-rich applications, leveraging components'},
        {id: 3, title: 'TypeScript', description: 'Enhancing code quality, providing static typing and support'},
        {id: 4, title: 'CSS', description: 'Creating responsive designs, and enhancing user interfaces'},
        {id: 5, title: 'Redux', description: 'State management, implementing predictable data flow'},
        {id: 6, title: 'API', description: 'Connecting applications, fetching and handling data'},
        {id: 7, title: 'MUI', description: 'Elegant and responsive interfaces, ensuring a consisting'},
        {id: 8, title: 'Storybook', description: 'Reusability and streamlining the development process.'},
        {id: 9, title: 'Next.js', description: 'Building performant and SEO-friendly web applications'},

    ];

    return (
        <section className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={styleContainer.title}>Skills</h2>
                <div className={s.skills}>
                    {skillsArray.map((el) => (
                        <Skill
                            key={el.id}
                            description={el.description}
                            title={el.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

