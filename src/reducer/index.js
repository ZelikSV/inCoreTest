import { combineReducers } from 'redux';
import {reducerClients}  from './myReducer';
import {filterReducer} from './filterReducer';

export default combineReducers({
    reducerClients,
    filterReducer
});