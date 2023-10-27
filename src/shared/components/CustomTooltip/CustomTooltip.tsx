import { NameType, Payload, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import cls from './style.module.scss';

interface CustomTooltipProps {
    payload?: Payload<ValueType, NameType>[];
}

export const CustomTooltip = ({ payload, }: CustomTooltipProps) => {
    if(!payload?.length) {
        return null;
    }

    return (
        <div className={cls.customTooltip}>
            ₽ {payload[0].payload.uv}
        </div>
    );
};