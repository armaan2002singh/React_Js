//different approach
import { createContext,useContext} from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: ()=>{

    },
    lightTheme: ()=>{

    }
})// i provided the default object in the context.
//Here we can give the values in the create context, when the context is first time build.

//here we are providing the variable and methods both in context. video - 49:50

//in this appraoch we will provide the value in the same file, instead of creating another-one.
export const ThemeProvider = ThemeContext.Provider

//not only this we can also create the custom hooks

export default function useTheme(){
    return useContext(ThemeContext)
}