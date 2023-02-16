import {createSlice} from "@reduxjs/toolkit";
import {Cards} from "./cardsType";
import {cardsApi} from "../../services/services";

const initialState: Cards = {
    allCards: null,
}
export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(cardsApi.endpoints.getAllCards.matchFulfilled, (state, {payload}) => {
            console.log(payload)
            state.allCards = payload
        })
    }
})

export default cardsSlice.reducer
