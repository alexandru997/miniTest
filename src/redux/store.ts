import {combineReducers, configureStore} from "@reduxjs/toolkit";
import CardsReducer from './cards/cardsSlice';
import {cardsApi} from "../services/services";

const rootReducer = combineReducers({
    cards: CardsReducer,
    [cardsApi.reducerPath]: cardsApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(cardsApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
