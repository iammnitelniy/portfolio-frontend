import s from './Relocation.module.scss'
import styleContainer from '../common/styles/Container.module.scss'



export const Relocation = () => {


    return (
        <div className={s.relocationBlock}>
            <div className={`${styleContainer.container} ${s.relocationContainer}`}>

                <h2 className={styleContainer.title}>Relocation</h2>



                        <button className={styleContainer.button}>Employ me</button>


            </div>
        </div>
    );
};

