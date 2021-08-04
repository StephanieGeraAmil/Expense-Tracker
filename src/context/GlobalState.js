import React,{createContext, useReducer } from "react"
import AppReducer from './AppReducer.js'

//initial state
const initialState={transactions:[]}

//create context
export const GlobalContext = createContext(initialState)




//provider component
export const GlobalProvider = ({children})=>{ 
    const [state, dispatch]= useReducer(AppReducer, initialState)

    //actions
 
    const addTransaction=(transcation)=>{
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transcation
            });
    }

    const deleteTransaction=(id)=>{
        dispatch({
            type: 'DELETE_TRANSACTIONN',
            payload: id
            });
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,addTransaction,deleteTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}


