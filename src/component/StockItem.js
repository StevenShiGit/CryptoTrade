import { Link,useHistory } from "react-router-dom";


function StockItem(props) {
    let coinPrice = props.price;
    const history=useHistory();

    function redirect() {
    
        const path = "/coin/:" + props.id;
        history.push(path);
    }
    return (

        <div class="card" onClick={()=>redirect()}>
            <img class="img-stock" src={props.icon} alt="btc" />
            <div class="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.name} TO MOON</p>
                <p>Cost: {parseFloat(coinPrice).toFixed(2)} USD</p>
            </div>
        </div>

    );
}


export default StockItem; 