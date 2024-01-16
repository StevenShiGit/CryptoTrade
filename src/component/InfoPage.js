import {useParams} from "react-router-dom";

async function Coin(){

    const init = {
        method:'GET',
        headers:{'X-RapidAPI-Key':'43d54ea77bmsh6d104809cff249cp16537bjsn06f3f39b0d91',
        'X-RapidAPI-Host':'coinranking1.p.rapidapi.com'
        }
    };
    const {id}=useParams();
   
    const url = "https://api.coinranking.com/v2/coin/" + id.substring(1);
    

    const data= await fetch(url, init);
    const coin= await data.json();

    return coin.data.name;
    

}


function InfoPage(){

   
    return (

        
        <h2>   </h2>
    );
}

export default InfoPage;