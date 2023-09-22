import s from './MyProjects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./Project/Project";


export const MyProjects = () => {
    const projectsArray: number[] = [1, 2]


    return (
        <div className={s.myProjectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>

                <div className={s.title}>
                    <h2>My Projects</h2>
                </div>


                <div className={s.projects}>
                    {projectsArray.map(()=> {
                        return <div><Project title={'Hardcode'}  description={'LOREM HARDCODE Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat dignissimos totam quam nobis, accusamus iste? Officiis quia, ratione cum, ut hic unde at assumenda placeat atque itaque earum velit.\n'} /></div>

                    })}

                </div>
            </div>
        </div>
    );
};

