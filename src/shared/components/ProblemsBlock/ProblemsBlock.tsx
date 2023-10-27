import { useAppSelector } from 'src/app/hooks/redux';
import { selectProblem } from 'src/store/slices/problems/problemsSlice';
import { Problem } from '../Problem/Problem';
import cls from './style.module.scss';

export const ProblemsBlock = () => {
    const problems = useAppSelector(selectProblem);

    return (
        <div className={cls.problemsBlockWrapper}>
            <span className={cls.mainTitle}>Проблемные зоны</span>
            <div className={cls.list}>
                {problems.map((item, index) => (
                    <Problem
                        key={`${item.title}__${index}`}
                        title={item.title}
                        amount={item.amount}
                    />
                ))}
            </div>
        </div>
    );
};