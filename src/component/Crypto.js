import { useState,useEffect } from 'react';
import StockItem from '/Users/stevenshi/cryptotrade/src/component/StockItem.js';

// 43d54ea77bmsh6d104809cff249cp16537bjsn06f3f39b0d91
async function getFact(setList){
    const init={
        method:'GET',
        headers: {'X-RapidAPI-Key':'43d54ea77bmsh6d104809cff249cp16537bjsn06f3f39b0d91',
                'X-RapidAPI-Host':'coinranking1.p.rapidapi.com'
        }
    };
    const url = 'https://api.coinranking.com/v2/coins?limit=31';
    
    const response = await fetch(url,init);

    const fact = await response.json();
    
    const coins_list = fact.data.coins;

    //every element in the coinObj array, add to list

    setList(coins_list.map(coinObj=>{
        
        return <StockItem name={coinObj.name} icon = {coinObj.iconUrl} price={coinObj.price} id ={coinObj.uuid}/>;
    }));

    



    
    
    
}

function Crypto(){
    const [list,setList]=useState([]);

    useEffect(()=>{
        getFact(setList);

        
    }, []);
    
    
    return(
        
        <div class="crypto-list">
        
           {list}
           
        </div>
    );


}

export default Crypto;