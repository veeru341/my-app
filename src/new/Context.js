import React, { useContext, createContext, useReducer } from 'react';
import { reducer } from "./Reducer";

const store = createContext();

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        cart : []
    });


    return (
        <store.Provider value={{state, dispatch}}>
            {children}
        </store.Provider>
    )
}

export const Contextstore = () => {
    return useContext(store);
}

export default Context