import { useState } from 'react';
import { periods } from 'src/shared/mocks/arrays';
import { CustomLineChart } from '../CustomLineChart/CustomLineChart';
import { useAppSelector } from 'src/app/hooks/redux';
import { selectFinaces, selectSelectedBlock } from 'src/store/slices/finance/financeSlice';
import { generateResultChart } from 'src/shared/utils/generateRandomInfo';
import { ResultChartBlock } from '../ChartResultBlock/ChartResultBlock';
import cls from './style.module.scss';
import classNames from 'classnames';

export const Chart = () => {
    const [ selectedPeriod, setSelectedPeriod ] = useState(periods[2]);

    const finances = useAppSelector(selectFinaces);
    const selected = useAppSelector(selectSelectedBlock);

    const handleChangePeriod = (el: typeof periods[0]) => {
        setSelectedPeriod(el);
    };

    const selectedData = selected?.datas
        ? selected.datas[selectedPeriod.fkValue]
        : null;

    return (
        <div className={cls.chartContainer}>
            <div className={cls.periods}>
                <span className={cls.title}>Общая статистика</span>
                <div className={cls.list}>
                    {periods.map((el) => (
                        <button
                            key={el.fkValue}
                            onClick={() => handleChangePeriod(el)}
                            className={
                                classNames(cls.btnPeriod, { [cls.activeBtnPeriod]: selectedPeriod.id === el.id, })
                            }
                        >{el.value}</button>
                    ))}
                </div>
            </div>
            <CustomLineChart data={selectedData} />
            <div className={cls.blocks}>
                {generateResultChart(finances).map((el) => (
                    <ResultChartBlock
                        key={el.title}
                        {...el}
                    />
                ))}
            </div>
        </div>
    );
};