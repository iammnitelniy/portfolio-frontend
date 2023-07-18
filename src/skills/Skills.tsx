import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


export const Skills = () => {
    const skillsArray: number[] = [1, 2, 3]


    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
           <h2 className={s.title}>Skills</h2>

                <div className={s.skills}>
                    {skillsArray.map((el)=> {
                        return<Skill key={el} description={'HARCODE LOREM IPSUN DOLOR ATS ARANTES DO NASIMENTU BEG LOAYAL'} title={'Hardcode'}/>

                    })}

                </div>
            </div>
        </div>
    );
};

