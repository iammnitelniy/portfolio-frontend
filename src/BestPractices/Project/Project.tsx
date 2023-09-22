import s from './Project.module.css'

export type SkillProps = {
    title: string
    description: string
}

export const Project: React.FC<SkillProps> = ({title, description}) => {
    return (
        <div className={s.project}>



            <div className={s.imgContainer}>

                <a href="#">Show </a>
                <img/>


            </div>


            <div className={s.descriptionContainer}>

                <h3>{title}</h3>
                <span className={s.description}>
                {description}
            </span>

            </div>
        </div>
    );
};

