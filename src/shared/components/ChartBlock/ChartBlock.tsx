import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux';
import { selectBlock, selectFinaces, selectSelectedBlock } from 'src/store/slices/finance/financeSlice';
import { BlockFinance } from 'src/shared/components/BlockFinance/BlockFinance';
import { FinanceBlock } from 'src/shared/types/general';
import cls from './style.module.scss';

export const ChartBlock = () => {
    const dispatch = useAppDispatch();
    const selectedBlock = useAppSelector(selectSelectedBlock);
    const finances = useAppSelector(selectFinaces);

    const handleSelectBlock = (item: FinanceBlock) => {
        dispatch(selectBlock(item));
    };

    return (
        <div className={cls.chartBlockWrapper}>
            {finances.map((item, index) => (
                <BlockFinance
                    key={`${item.division}__${index}`}
                    amount={item.amount}
                    subTitle={item.division}
                    percent={item.percent}
                    active={selectedBlock?.type === item.type}
                    selectBlock={() =>handleSelectBlock(item)}
                />
            ))}
        </div>
    );
};