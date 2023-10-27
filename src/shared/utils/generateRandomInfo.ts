import { FinanceBlock } from '../types/general';

export const generateRandomNumber = () => Math.floor(Math.random() * 100000) + 1;

export const colors = [
    '#73CF7A',
    '#30C7DC',
    '#45AAF2',
    '#F5E230',
    '#AC74FC'
];

export const dataWeek = () => {
    return [
        { name: 'Пн',
            uv: generateRandomNumber(),
            pv: generateRandomNumber(),
            amt: generateRandomNumber(),
            kk: generateRandomNumber(),
            ok: generateRandomNumber(),
        },
        {
            name: 'Вт',
            uv: generateRandomNumber(),
            pv: generateRandomNumber(),
            amt: generateRandomNumber(),
            kk: generateRandomNumber(),
            ok: generateRandomNumber(),
        },
        {

            name: 'Ср',
            uv: generateRandomNumber(),
            pv: generateRandomNumber(),
            amt: generateRandomNumber(),
            kk: generateRandomNumber(),
            ok: generateRandomNumber(),
        },
        {

            name: 'Чт',
            uv: generateRandomNumber(),
            pv: generateRandomNumber(),
            amt: generateRandomNumber(),
            kk: generateRandomNumber(),
            ok: generateRandomNumber(),
        },
        {

            name: 'Пт',
            uv: generateRandomNumber(),
            pv: generateRandomNumber(),
            amt: generateRandomNumber(),
            kk: generateRandomNumber(),
            ok: generateRandomNumber(),
        },
        {

            name: 'Сб',
            uv: generateRandomNumber(),
            pv: generateRandomNumber(),
            amt: generateRandomNumber(),
            kk: generateRandomNumber(),
            ok: generateRandomNumber(),
        },
        {

            name: 'Вс',
            uv: generateRandomNumber(),
            pv: generateRandomNumber(),
            amt: generateRandomNumber(),
            kk: generateRandomNumber(),
            ok: generateRandomNumber(),
        }
    ];
};

export const dataMonth = () => {
    return Array.from({ length: 31, }, (_, i) => ({
        name: (i + 1).toString(),
        uv: Math.floor(Math.random() * 50000),
        pv: Math.floor(Math.random() * 50000),
        amt: Math.floor(Math.random() * 50000),
        kk: generateRandomNumber(),
        ok: generateRandomNumber(),
    }));
};

export const dataYear = () => {
    return [
        'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ].map(month => ({
        name: month,
        uv: generateRandomNumber(),
        pv: generateRandomNumber(),
        amt: generateRandomNumber(),
        kk: generateRandomNumber(),
        ok: generateRandomNumber(),
    }));
};

const createRecord = (
    division: string,
    amount: number,
    type: string,
    percent: number
): FinanceBlock => ({
    division,
    date: new Date().toString(),
    amount,
    type,
    percent,
    datas: {
        year: dataYear(),
        week: dataWeek(),
        month: dataMonth(),
    },
});

export const generateRandom = (): FinanceBlock[] => {
    const amountExpanses = generateRandomNumber();
    const amountIncome = generateRandomNumber();
    const revenueExpanses = amountIncome + amountExpanses;

    return [
        createRecord('Итоги', revenueExpanses, 'revenue', 21.5),
        createRecord('B2B', amountExpanses, 'expanses', 43.7),
        createRecord('B2C', amountIncome, 'income', -13.7)
    ];
};

export const generateResultChart = (finances: FinanceBlock[]) => {
    const revenue = finances.find((el) => el.type === 'revenue');
    const expanses = finances.find((el) => el.type === 'expanses');
    const income = finances.find((el) => el.type === 'income');

    return [
        {
            color: colors[0],
            title: 'Выручка',
            isWarn: false,
            value: revenue?.amount ?? 0,
        },
        {
            color: colors[1],
            title: 'Затраты',
            isWarn: true,
            value: expanses?.amount ?? 0,
        },
        {
            color: colors[2],
            title: 'Прибыль',
            isWarn: true,
            value: income?.amount ?? 0,
        },
        {
            color: colors[3],
            title: 'Задолжность',
            isWarn: false,
            value: 0,
        },
        {
            color: colors[4],
            title: 'Итог',
            isWarn: false,
            value: revenue?.amount ?? 0,
        }
    ];
};