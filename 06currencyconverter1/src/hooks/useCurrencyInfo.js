//HOOKS
// can use thr built in hooks.
import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        const url = fetch(` //https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // link to get free updates API-https://github.com/fawazahmed0/exchange-api?tab=readme-ov-file
       
        .then((res) => res.json())
        .then((res) => setData(res[currency]))        
        console.log(data);
        
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;