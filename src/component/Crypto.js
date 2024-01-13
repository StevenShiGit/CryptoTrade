import { useState,useEffect } from 'react';
import StockItem from '/Users/stevenshi/cryptotrade/src/component/StockItem.js';

//IZBH032QLOCOG39Z
async function getFact(setData){
    const ticker="IBM";
    console.log("symbol=" +ticker)
    const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo");
    const fact = await response.json();
    console.log(fact["Time Series (Daily)"]["2024-01-10"]["1. open"]);

}

function Crypto(){
    const [data, setData] = useState("1");
    useEffect(()=>{
        getFact(setData);
    }, []);

    return(
        
        <>
            
            <StockItem />
        </>
    );


}

export default Crypto;