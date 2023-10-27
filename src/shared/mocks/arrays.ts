import { Box, Chart, Coins, List, People, Scheduler, Settings } from '../components/icons';
import { Period } from '../types/general';

export const iconsArr = [
    {
        icon: Scheduler,
        to: '/sc',
    },
    {
        icon: List,
        to: '/li',
    },
    {
        icon: Box,
        to: '/box',
    },
    {
        icon: People,
        to: '/pe',
    },
    {
        icon: Coins,
        to: '/coins',
    },
    {
        icon: Chart,
        to: '/',
    },
    {
        icon: Settings,
        to: '/settings',
    }
];

export const tabs = [
    'Свод данных по сотрудникам',
    'Сводный отчет внутри компании',
    'Сводный отчет по сделкам'
];

export const periods: Period[] = [
    {
        id: 1,
        value: 'Неделя',
        fkValue: 'week',
    },
    {
        id: 2,
        value: 'Месяц',
        fkValue: 'month',
    },
    {
        id: 3,
        value: 'Год',
        fkValue: 'year',
    }
];

export const lineConfigs = [
    { dataKey: 'uv', stroke: '#73CF7A', activeDot: false, },
    { dataKey: 'pv', stroke: '#30C7DC', activeDot: false, },
    { dataKey: 'amt', stroke: '#45AAF2', activeDot: false, },
    { dataKey: 'kk', stroke: '#F5E230', activeDot: false, },
    { dataKey: 'ok', stroke: '#AC74FC', activeDot: { r: 8, fill: 'white', stroke: '#AC74FC', strokeWidth: 3, }, }
];