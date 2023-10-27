import { generateRandomNumber } from './generateRandomInfo';

const createRecord = (title: string, amount: number) => ({
    title,
    amount,
});

export const generateRandomProblems = () => {
    const amountExpanses1 = generateRandomNumber();
    const amountExpanses2 = generateRandomNumber();
    const amountExpanses3 = generateRandomNumber();
    const amountExpanses4 = generateRandomNumber();
    const amountExpanses5 = generateRandomNumber();
    const amountExpanses6 = generateRandomNumber();
    const amountExpanses7 = generateRandomNumber();
    const amountExpanses8 = generateRandomNumber();
    const amountExpanses9 = generateRandomNumber();
    const amountExpanses10 = generateRandomNumber();

    return [
        createRecord('Линейный персонал', amountExpanses1),
        createRecord('Подразделение разовых работ ФОТ', amountExpanses2),
        createRecord('Бензин (наличные)', amountExpanses3 ),
        createRecord('Закупка инвентаря', amountExpanses4),
        createRecord('Закупка спецодежды/СИЗ', amountExpanses5),
        createRecord('Ремонт оборудования', amountExpanses6 ),
        createRecord('Обслуживание автомобиля', amountExpanses7),
        createRecord('Форс-мажоры', amountExpanses8),
        createRecord('Рекламные бюджеты (Блогеры)', amountExpanses9 ),
        createRecord('Рекламные бюджеты (Контекст)', amountExpanses10 )
    ];
};
