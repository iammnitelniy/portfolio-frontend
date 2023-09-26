import s from './Skill.module.css';

export type SkillProps = {
    title: string;
    description: string;
};

const Skill: React.FC<SkillProps> = ({ title, description }) => {
    return (
        <div className={s.skill}>
            <div className={s.content}>
                <h3>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>
            <div className={s.icon}></div>
        </div>
    );
};

export default Skill;