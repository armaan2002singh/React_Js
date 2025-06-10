// how to make store.
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/Todo/todoSlice'


export const store = configureStore({
    reducer: todoReducer // can also add mutliple reducer's key with object, but currently we have one one.
})
// will take object.