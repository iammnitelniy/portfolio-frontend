import s from './MyProjects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import taskManagerImg from '../common/images/task_manager.jpg'
import socialNetworkImg from '../common/images/social_network.jpg'
import wishListImg from '../common/images/wishlist.jpg'
import {Project} from "./Project/Project";

export type ProjectType = {id: number, title: string, image: string, description: string}



export const MyProjects = () => {
    const projectsArray: ProjectType[] = [
        {id: 0, title: 'Task Manager', image: taskManagerImg, description: 'LOREM HARDCODE Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat dignissimos totam quam nobis, accusamus iste? Officiis quia, ratione cum, ut hic unde at assumenda placeat atque itaque earum velit.'},
        {id: 1, title: 'Social Network', image: socialNetworkImg, description: 'LOREM HARDCODE Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat dignissimos totam quam nobis, accusamus iste? Officiis quia, ratione cum, ut hic unde at assumenda placeat atque itaque earum velit.'},
        {id: 2, title: 'Wishlist', image: wishListImg, description: 'LOREM HARDCODE Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat dignissimos totam quam nobis, accusamus iste? Officiis quia, ratione cum, ut hic unde at assumenda placeat atque itaque earum velit.'},
    ]


    return (
        <div className={s.myProjectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>

                <div className={s.title}>
                    <h2>My Projects</h2>
                </div>


                <div className={s.projects}>
                    {projectsArray.map((el)=> {
                        return <div key={el.id}><Project image={el.image} title={el.title}  description={el.description} /></div>

                    })}

                </div>
            </div>
        </div>
    );
};

