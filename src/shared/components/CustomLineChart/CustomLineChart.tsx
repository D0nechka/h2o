import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer, XAxis } from 'recharts';
import { CustomTooltip } from '../CustomTooltip/CustomTooltip';
import { lineConfigs } from 'src/shared/mocks/arrays';
import { DataType } from 'src/shared/types/general';
import cls from './style.module.scss';

interface CustomLineChartProps {
    data: DataType[] | null;
}

export const CustomLineChart = ({ data, }: CustomLineChartProps) => {
    return (
        <ResponsiveContainer width="100%" height={254} className={cls.container}>
            <LineChart
                data={data ?? []}
                className={cls.mainChart}
            >
                <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={false}
                    strokeOpacity={0.4}
                />
                <Tooltip
                    filterNull={false}
                    content={({ payload, }) => <CustomTooltip payload={payload} />}
                />
                <XAxis
                    dataKey="name"
                    width={10}
                    className={cls.xAxis}
                    padding={{ left: 15, right: 8, }}
                    opacity={0.5}
                    axisLine={false}
                    tickLine={false}
                />
                {lineConfigs.map(config => (
                    <Line
                        key={config.dataKey}
                        strokeWidth={4}
                        dot={false}
                        type='monotone'
                        {...config}
                    />
                ))}
            </LineChart>
        </ResponsiveContainer>
    );
};