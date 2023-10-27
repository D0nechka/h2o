import cls from './style.module.scss';

interface ResultChartBlockProps {
    color: string;
    isWarn: boolean;
    title: string;
    value: number;
}

export const ResultChartBlock = ({
    title,
    isWarn,
    value,
    color,
}: ResultChartBlockProps) => {
    return (
        <div className={cls.chartBlock}>
            <div
                style={{ backgroundColor: color, }}
                className={cls.colorBlock}
            >
                {isWarn && '!'}
            </div>
            <div className={cls.info}>
                <span className={cls.title}>{title}</span>
                <span className={cls.amount}>₽ {value.toLocaleString('ru-RU')}</span>
            </div>
        </div>
    );
};