import {ADD,DELETE,TOGGLE,CLEAR} from "../types/todoTypes"

const initialState = {
    counter : 0 ,
    list : [{
        id: 0,
        text : "Add Todo",
        completed : false,
    }]
}

const todoReducer = (state = initialState , action)=>{
    switch (action.type) {
        case ADD:
            return {
                counter : state.counter + 1,
                list : [
                    ...state.list,
                    {id : state.counter + 1 , text : action.payload , completed : false}
                ]
            }
        case DELETE:
            return {
                list : state.list.filter((item)=> item.id !== action.payload)
            }
            case TOGGLE:
            return {
                ...state,
                list : state.list.map((item)=> item.id === action.payload ? {...item, completed : !item.completed}: item)
            }
            case CLEAR:
                return state
            default:
                return state
    }
}

export default todoReducer;