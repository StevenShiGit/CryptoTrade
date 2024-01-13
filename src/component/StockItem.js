
function StockItem(props){
    return(
        <div class="card">
            <img class="img-stock" src={require('/Users/stevenshi/cryptotrade/src/img/btc.png')} alt="btc"/>
            <div class="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.name} TO MOON</p>
            </div>
        </div>
        
    );
}


export default StockItem; 