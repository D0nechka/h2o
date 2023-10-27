import { Chart, ChartBlock, ProblemsBlock } from '..';
import cls from './style.module.scss';

export const ContentMain = () => {
    return(
        <div className={cls.contentWrapper}>
            <h2 className={cls.title}>Сводный отчет</h2>
            <div className={cls.contentContainer}>
                <div className={cls.contentBlock}>
                    <ChartBlock/>
                    <Chart />
                </div>
                <ProblemsBlock/>
            </div>
        </div>
    );
};