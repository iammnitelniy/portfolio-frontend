import s from './Project.module.css'

export type SkillProps = {
    image: string
    title: string
    description: string
}

export const Project: React.FC<SkillProps> = ({title, description, image}) => {
    return (
        <div className={s.project}>



            <div className={s.imgContainer}>

                <a href="#"></a>
                <img src={image}/>


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

