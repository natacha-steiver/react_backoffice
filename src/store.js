import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import allReducers from './_reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



const initialState = {
  sidebarShow: 'responsive'
}





const loggerMiddleware = createLogger();
const persistConfig = {
  key: 'root',
  storage,
}

 export const persistedReducer = persistReducer(persistConfig, allReducers);

  export const store = createStore(persistedReducer,composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
));
  export const persistor = persistStore(store)




//const store = createStore(changeState)
