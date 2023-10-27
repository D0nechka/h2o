import { useState } from 'react';
import { tabs } from 'src/shared/mocks/arrays';
import { ArrowLeft, ArrowRight } from '../icons';
import classNames from 'classnames';
import cls from './style.module.scss';

export const Tabs = () => {
    const [ activeIndex, setActiveIndex ] = useState<number>(1);

    const handleNext = () => {
        if(activeIndex + 1 < tabs.length) {
            setActiveIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if(activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
        }
    };

    return (
        <>
            <div className={cls.btns}>
                <button
                    onClick={handlePrev}
                    className={cls.btn}
                >
                    <ArrowLeft />
                </button>
                <button
                    className={cls.btn}
                    onClick={handleNext}
                >
                    <ArrowRight />
                </button>
            </div>
            <div className={cls.headerNav}>
                {tabs.map((el, index) => (
                    <span
                        className={classNames(cls.nav, { [cls.active]: activeIndex === index, })}
                        key={el}
                    >
                        {el}
                    </span>
                ))}
            </div>
        </>
    );
};