//HOOKS
// can use thr built in hooks.
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
      if (!currency) return;// check
      // link to get free updates API-https://github.com/fawazahmed0/exchange-api?tab=readme-ov-file
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => {
        console.log(res); // currencies are in res
        
        return res.json(); // did mistake of not using the returing keyword a silly mistake.
      })
      .then((res) => {
        setData(res[currency]); // currencies inside of res-data.
        console.log("Fetched currency data:", res[currency]); // For debugging
      })
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  return data;// when data is set by useState then sent to Component.
}

export default useCurrencyInfo;

/*useEffect(() => {
  if (!currency) return;

  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((data) => {
      if (data && data[currency]) {
        setData(data[currency]);
        console.log("Fetched currency data:", data[currency]);
      } else {
        console.error("Unexpected data format:", data);
        setData({});
      }
    })
    .catch((err) => {
      console.error("Error fetching currency data:", err);
      setData({});
    });
}, [currency]);*/
