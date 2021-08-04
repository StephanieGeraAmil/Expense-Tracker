import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const IncomeExpenses = () => {
      function sum(sum, num) {
            return sum + num;
        }
     const {transactions}=useContext(GlobalContext)
    const income=transactions.map(item=>(item.amount>0?item.amount:0)).reduce(sum,0).toFixed(2)
    const expenses=Math.abs(transactions.map(item=>(item.amount<0?item.amount:0)).reduce(sum,0)).toFixed(2)
    return (
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p  className="money plus">+${income}</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p className="money minus">-${expenses}</p>
            </div>
        </div>     
    )
}
