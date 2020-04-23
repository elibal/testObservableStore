export interface IRate {
    rate_id: number;
    rate_name: string;
    rate_type_id: number;
    rate_type_name: string;
    annual_percent: number;
}

export enum RatesStoreActions {
    Init = 'INIT',
    AddRate = 'ADD_RATE',
    RemoveRate = 'REMOVE_RATE',
    GetRates = 'GET_RATE',
    SortRates = 'SORT_RATE'
}