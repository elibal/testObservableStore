import { IRate } from './shared.models';

export interface StoreState {
    rates: IRate[];
    selectedRate: IRate;
}