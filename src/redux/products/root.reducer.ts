import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { ROOT_REDUX_PERSIST_KEY } from "../../utils/utils";
import storage from 'redux-persist/lib/storage'

// Basic config for setting up redux persist used for persisting the cart data
const PERSIST_CONFIG = {
  key: ROOT_REDUX_PERSIST_KEY,
  storage,
  whitelist: ['cartReducer']
  
}

const rootReducer = combineReducers({

})

// A persisted version of the root reducer
export const persistedReducer = persistReducer(PERSIST_CONFIG, rootReducer)


export default rootReducer