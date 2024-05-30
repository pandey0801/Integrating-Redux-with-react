import { createStore } from "redux";

const INITAL_VALUE = {
    counter : 6
}

const counterreducer = (store = INITAL_VALUE, action)=>
    {
    
        // console.log(action);
        if(action.type==="INCREMENT")
            {
                return {counter : store.counter + 1 }
            }
            else if (action.type==='DEREMENT')
                {
                    return {counter : store.counter - 1}
                }
        return store

    }
const counterStore = createStore(counterreducer);

export default counterStore;