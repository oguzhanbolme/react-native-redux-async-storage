import React from "react"
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import allReducers from "./reducers"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
    key:"root",
    storage:AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root)