import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Col, Row, Typography, Select } from 'antd';
import LineChart from "/Users/stevenshi/cryptotrade/src/component/LineChart.js";

const {Option} = Select;

async function Coin(id,setName,setHistory, setPrice, timePeriod){

    const init = {
        method:'GET',
        headers:{'X-RapidAPI-Key':'43d54ea77bmsh6d104809cff249cp16537bjsn06f3f39b0d91',
        'X-RapidAPI-Host':'coinranking1.p.rapidapi.com'
        }
    };

    const url = "https://api.coinranking.com/v2/coin/" + id.substring(1);
    
   
    const data= await fetch(url, init);
    const coin= await data.json();
    console.log(coin);
    const url2= url+"/history?timePeriod="+timePeriod;
    
    const data2= await fetch(url2, init);
    const historyData= await data2.json();


    const quick=coin.data.coin;
    
    
    setName(quick.name);
    setHistory(historyData);
    setPrice(quick.price);
    
}

/*next step: change labels*/
function InfoPage(){
    const {id}=useParams();
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const [name, setName] = useState("");
    const [history, setHistory] = useState();
    const [price, setPrice] = useState("");
    const [timePeriod, setTimePeriod] = useState('7d');
    
    
    useEffect(()=>{
        Coin(id, setName, setHistory, setPrice, timePeriod);
    },[timePeriod]);

    

    
    return (
        
        <Col className="graph-container">
            <Select defaultValue="7d" placeholder="Time Period" onChange={(value) => {setTimePeriod(value)}}>
                {time.map((date) => <Option key={date}>{date}</Option>)}
               
            </Select>
            <LineChart coinHistory={history} currentPrice={price} coinName={name} setTimePeriod={setTimePeriod}/>
        </Col>
        
        

    );
}

export default InfoPage;