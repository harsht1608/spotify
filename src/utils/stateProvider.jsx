import { Children, createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const stateProvider = ({ Children, initialState, reducer }) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {Children}
    </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);
