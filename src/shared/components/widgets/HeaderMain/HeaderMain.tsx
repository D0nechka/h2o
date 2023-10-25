import { ArwRight, ArwLeft } from '../../icons';
import ava from 'src/shared/assets/Ava.png';
import cls from './style.module.scss';
import { Triangle } from '../../icons/triangle';

export const HeaderMain = () => {
    return (
        <div className={cls.headerWrapper}>
            <div className={cls.headerSelector}>
                <button className={cls.btn}>
                    <ArwLeft />
                </button>
                <button className={cls.btn}>
                    <ArwRight/>
                </button>
                <div className={cls.headerNav}>
                    <span>Свод данных по сотрудникам</span>
                    <span className={cls.active}>Сводный отчет внутри компании</span>
                    <span>Сводный отчет по сделкам</span>
                </div>
            </div>
            <div className={cls.headerProfile}>
                <img src={ava}></img>
                <div className={cls.profInfo}>
                    <span className={cls.name}>Kristina🐰</span>
                    <span className={cls.profession}>менеджер продаж</span>
                </div>
                <button className={cls.select}>
                    <Triangle/>
                </button>
            </div>
        </div>
    );
};