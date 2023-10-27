import { ArrowDown, ArrowUp } from '../icons/index';
import cls from './style.module.scss';
import classNames from 'classnames';

interface BlockProps {
    active: boolean;
    amount: number;
    subTitle: string;
    percent: number;
    selectBlock: () => void;
}

export const BlockFinance = ({
    active,
    amount,
    subTitle,
    percent,
    selectBlock,
}: BlockProps) => {
    const isPecentBiggerZero = percent >= 0;

    return (
        <div
            role='button'
            className={classNames(cls.block, { [cls.activeBlock]: active, })}
            onClick={selectBlock}
        >
            <div className={classNames(cls.percentBlock, { [cls.activePercentBlock]: isPecentBiggerZero, })}>
                <div className={cls.arrowImg}>
                    {isPecentBiggerZero ? <ArrowUp /> : <ArrowDown />}
                </div>
                <span className={cls.percent}>{Math.abs(percent)} %</span>
            </div>
            <span className={cls.amount}>₽ {amount.toLocaleString('ru-RU')}</span>
            <span className={cls.subTitle}>{subTitle}</span>
        </div>
    );
};