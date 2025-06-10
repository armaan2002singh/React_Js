import { createSlice, nanoid } from "@reduxjs/toolkit";
// to create slice - createSlice() is enough but i am using the nanoid as well but for creating the unique ids.

const initialState = {
    todos:[
        {
            id:1,
            text:"hello world"
        }
    ]
}
//-- initialState is created which can be an Array or an  Object. but using object for multiple values.

//now will create a Slice which is almost the bigger version of Reducer. -->
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        // properties or functions.
        addTodo:(state, action)=>{//state- acccess of current state's present values. Action- some values will come like id to perform method but that values will be came from action.
            //if i need todo then it will also come from action.
            console.log(action);
            
            const todo = {
                id:nanoid(), //used.
                text:action.payload// will get text from- action's payload will be sent in text property.
            }//todo created-need to send it in state

            state.todos.push(todo)
        } ,// can add reference in it of a function, but also can declae taht in it. 
        removeTodo:(state, action)=>{//action- passed data.
            state.todos= state.todos.filter((todo)=> todo.id !==action.payload)
        },// we were using this same in contextApi but here we are also writing the definition of the function. where in context-Api we were only declaring it.
        
        // updateTodo:(state,action)=>{

        // }
    } 
    
    // here most of the people love to declare the initialState here in the creation but i have created it above, seperatly.
}) // can place object inside of this method most of the time.
// NOW, slices have name, so while naming it keep it mind that when we will use redux-toolkit of chrome extension then this name will beused there. {name}- property

// without reducer the store was incomplete.

export const {addTodo, removeTodo}= todoSlice.actions
// exported the individual actions because will be used in the components.
export default todoSlice.reducer
//will give awareness to store about reducers and give list to store/