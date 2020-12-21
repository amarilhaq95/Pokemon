
import { combineReducers } from 'redux'
import contactsReducer from './contactsReducer';
import pokeReducer from './pokeReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({

    contacts: contactsReducer,
    ui: uiReducer,
    poke: pokeReducer

})


export default rootReducer;