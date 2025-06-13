import './App.css'

function App() {
  console.log(import.meta.env.VITE_APP_APPWRITE_URL);
  console.log();
  
  // it did not work because we made the application of vite but this implementation was of react.
  //so will use VITE_ and DB_PASSWORD = __

  //ACCESS by "import.meta.env"

  // then after having env file. we have settled-up of our appwrite platform 
  //then made a configuration file to make easy to access the varibales.

  return (
    <>
      <h1>A blog app with appwrite.</h1>
    </>
  )
}

export default App
//environment -> variables 
//always declare in project's root file.
//it always load once. after updates need to restart the file.