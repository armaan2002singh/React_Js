import { useEffect, useState } from 'react'
import { ThemeProvider } from './Context/theme'
import ThemeBtn from './Components/ThemeButton'
import Card from './Components/Card'

function App() {
  const [themeMode, setThemeMode] =useState("light")

      const lightTheme = ()=>{
        setThemeMode("light")
      }
      const darkTheme = ()=>{
        setThemeMode("dark")
      }

      //actaul change in theme.
      useEffect(()=>{
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
      },[themeMode])



  return (
  <>
  <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    {/* it is providing me the direct access to the values. */}
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                            {/*theme button*/}
                            <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                           {/*card*/}
                           <Card/>
                    </div>
                </div>
            </div>   
  </ThemeProvider>
  </>
  )
}

export default App
