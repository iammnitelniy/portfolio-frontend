import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import imageDevelopment from '../common/images/development.jpg';
import {Particle} from "../common/components/particles/Particles";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";

export const Main = () => {
    return (


        <Fade>
            <div className={s.mainBlock}>
                <Particle/>
                <div className={s.container}>
                    <div className={s.text}>
                        <h1 className={styleContainer.title}><ReactTypingEffect text={['Ilia Barabanov']}/></h1>
                        <p>
                            <ReactTypingEffect
                                text={["Front-end Developer"]}
                            />
                            </p>

                    </div>


                    <div className={s.about}>
                        I am a front-end developer with experience in creating SPA (React, Redux(RTK), JS, TS,
                        CSS(SASS), HTML).
                        Basically, I focus on continuous improvement in development and enjoy the process itself.
                        In my free time I improve my English and read
                        educational books (such as Head First and JS
                        Best Practice), I also solve cata on
                        Codewars. I am interested in the entire digital sphere and know the basics of Python. Ready to
                        consider proposals
                        full-time or part-time and
                        ready to move and relocation

                    </div>

                    <div className={s.imageContainer}>

                        <img src={imageDevelopment} alt={'developer'}/>
                    </div>

                </div>


            </div>
        </Fade>
    );
};