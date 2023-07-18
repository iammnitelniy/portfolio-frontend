import s from './Relocation.module.css'
import styleContainer from '../common/styles/Container.module.css'



export const Relocation = () => {


    return (
        <div className={s.relocationBlock}>
            <div className={`${styleContainer.container} ${s.relocationContainer}`}>

                <h2 className={s.title}>Considering relocation</h2>



                        <button className={s.button}>Employ me</button>


            </div>
        </div>
    );
};

