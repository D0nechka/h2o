export type DataType = { name: string, uv: number, pv: number, amt: number, kk: number, ok: number }

export type TypeDatas = 'week' | 'year' | 'month'

export type Period = {
    id: number,
    value: string,
    fkValue: TypeDatas,
}

export type FinanceBlock = {
    division: string;
    date: string;
    type: string;
    amount: number;
    percent: number;
    datas: Record<TypeDatas, DataType[]>
}

export type ProblemArea = {
    title: string;
    amount: number;
}

export type ProblemBlock = {
    title: string;
    amount: number;
}