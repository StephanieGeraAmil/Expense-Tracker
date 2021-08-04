import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Balance = () => {
     function sum(sum, num) {
            return sum + num;
        }
     const {transactions}=useContext(GlobalContext)
    const balance=transactions.map(item=>item.amount).reduce(sum,0)
    const sign=balance>0?'+':'-'
    return (
        <>
            <h4>Your Balance</h4>
             <h1>{sign}${Math.abs(balance).toFixed(2)}</h1>
        </>
    )
}
