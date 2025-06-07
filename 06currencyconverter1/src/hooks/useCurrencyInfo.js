//HOOKS
// can use thr built in hooks.
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
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
}, [currency]);


  return data;
}

export default useCurrencyInfo;
