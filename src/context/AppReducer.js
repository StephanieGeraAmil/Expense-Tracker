
export default(state, action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
        return{
         ...state,
        transactions: state.transactions.filter((trans)=>action.payload!==trans.id)
        }
        case 'ADD_TRANSACTION':
        return{
         ...state,
        transactions: [...state.transactions,action.payload ]
        }
        default:  return state
    }
}

// how a state changes in response of an action