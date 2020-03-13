import { ActionReducerMap } from '@ngrx/store';
import { reducer as diagnoseReducer } from './diagnose.reducers';

export interface IAppState {
    diagnosePageData: any;
}

export const reducers: ActionReducerMap<IAppState> = {
    diagnosePageData: diagnoseReducer,
};