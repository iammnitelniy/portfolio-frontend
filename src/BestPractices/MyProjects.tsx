import s from './MyProjects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import taskManagerImg from '../common/images/task_manager.jpg'
import socialNetworkImg from '../common/images/social_network.jpg'
import wishListImg from '../common/images/wishlist.jpg'
import {Project} from "./Project/Project";
import {Fade} from "react-awesome-reveal";

export type ProjectType = {id: number, title: string, image: string, description: string, way: string}



export const MyProjects = () => {
    const projectsArray: ProjectType[] = [
        {id: 0, way: 'https://github.com/iammnitelniy/manager_task_react', title: 'Task Manager', image: taskManagerImg, description: 'This is a powerful web application built with a modern tech stack. Leveraging the strength of React, Redux Toolkit (RTK), TypeScript, and Formik, it provides a seamless and intuitive user experience for managing tasks. The project also integrates Material-UI (MUI) for a visually appealing design and communicates with a RESTful API to ensure smooth data interactions. Task Manager streamlines task management, making it efficient and user-friendly.'},
        {id: 1, way: 'https://github.com/iammnitelniy/social_network', title: 'Social Network', image: socialNetworkImg, description: 'Dynamic and engaging web application created using a robust tech stack. With React at its core, it incorporates the power of Redux, TypeScript, and redux-form for state management and form handling. \n' +
                'To enhance data communication, the project utilizes Axios and REST API, ensuring efficient and secure interactions with the server. React Hooks and Object-Oriented Programming (OOP) principles are employed to keep the codebase organized and maintainable.'},
        {id: 2, way: 'https://github.com/iammnitelniy/wish_list_javascript', title: 'Wishlist', image: wishListImg, description: 'User-friendly web application built with a modern tech stack, including Reac, TypeScript, and Material-UI (MUI). It enables users to create and manage their wishlists effortlessly. With a sleek and intuitive interface, "Wishlist" makes it easy to keep track of desired items and share them with friends and family.'},

    ]


    return (
        <Fade>


            <div className={s.myProjectsBlock}>
                <div className={`${styleContainer.container} ${s.projectsContainer}`}>

                    <div className={styleContainer.title}>
                        <h2>My Projects</h2>
                    </div>


                    <div className={s.projects}>
                        {projectsArray.map((el) => {
                            return <div key={el.id}><Project way={el.way} image={el.image} title={el.title}
                                                             description={el.description}/></div>

                        })}

                    </div>
                </div>
            </div>
        </Fade>
    );
};

