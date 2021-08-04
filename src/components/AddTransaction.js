import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount,setAmount] = useState(0)
 const {addTransaction}=useContext(GlobalContext)
 const {transactions}=useContext(GlobalContext)

 const onSubmitfn=(e)=>{
     e.preventDefault();
     const newtrans={
         id: transactions.length+1,
         text,
         amount: +amount
     }
     addTransaction(newtrans)
 }

   
    return (
       
        <>
            <h3>Add new transaction</h3>
            <form  onSubmit={onSubmitfn}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text"  placeholder="Enter text..." onChange={(e)=>{setText(e.target.value)}}  value={text}/>
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number"  placeholder="Enter amount..."  onChange={(e)=>{setAmount(e.target.value)}} value={amount}/>
                </div>
                <button className="btn" >Add transaction</button>
            </form>
            
        </>
    )
}
