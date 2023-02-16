import {Selector} from "react-redux";
import {RootState} from "../store";

export const cardsSelector: Selector<RootState, RootState['cards']> = (state) => state.cards;
