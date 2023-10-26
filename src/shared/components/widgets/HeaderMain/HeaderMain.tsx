import { ArwRight, ArwLeft } from '../../icons';
import ava from 'src/app/assets/Ava.png';
import cls from './style.module.scss';
import { Triangle } from '../../icons/triangle';
import { useState } from 'react';

export const HeaderMain = () => {
    const [ activeIndex, setActiveIndex ] = useState(1);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={cls.headerWrapper}>
            <div className={cls.headerSelector}>
                <button
                    onClick={() => {handleClick(0);}}
                    className={cls.btn}>
                    <ArwLeft />
                </button>
                <button className={cls.btn}>
                    <ArwRight/>
                </button>
                <div className={cls.headerNav}>
                    <span
                        onClick={() => {handleClick(0);}}
                        className={activeIndex === 0 ? cls.active : ''}
                    >
                        Свод данных по сотрудникам
                    </span>
                    <span
                        onClick={() => {handleClick(1);}}
                        className={activeIndex === 1 ? cls.active : ''}
                    >
                            Сводный отчет внутри компании
                    </span>
                    <span
                        onClick={() => {handleClick(2);}}
                        className={activeIndex === 2 ? cls.active : ''}
                    >
                            Сводный отчет по сделкам
                    </span>
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