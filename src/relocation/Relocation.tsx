import s from './Relocation.module.css'
import styleContainer from '../common/styles/Container.module.css'



export const Relocation = () => {


    return (
        <div className={s.relocationBlock}>
            <div className={`${styleContainer.container} ${s.relocationContainer}`}>

                <h2 className={styleContainer.title}>Considering relocation</h2>



                        <button className={styleContainer.button}>Employ me</button>


            </div>
        </div>
    );
};

