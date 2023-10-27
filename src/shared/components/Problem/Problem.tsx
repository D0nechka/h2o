import classNames from 'classnames';
import cls from './style.module.scss';

interface ProblemProps {
    title: string,
    amount: number
}

export const Problem = ({
    title,
    amount,
}: ProblemProps) => {
    const isMoreThanFifty = amount > 50000;

    return (
        <div className={classNames(cls.problem, { [cls.activeProblem]: isMoreThanFifty, })}>
            <div className={cls.warn}>
                <span className={cls.warnContent}>!</span>
            </div>
            <div className={cls.problemInfo}>
                <span className={cls.title}>{title}</span>
                <span className={cls.amount}>{`₽ ${amount.toLocaleString('ru-RU')}`}</span>
            </div>
        </div>
    );
};