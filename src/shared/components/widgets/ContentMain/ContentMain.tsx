import { ChartBlock } from '../ChartBlock/ChartBlock';
import cls from './style.module.scss';

export const ContentMain = () => {
    return(
        <div className={cls.contentWrapper}>
            <h2>Сводный отчет</h2>
            <div className={cls.contentBlock}>
                <ChartBlock/>
            </div>
        </div>
    );
};