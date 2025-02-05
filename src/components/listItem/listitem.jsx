import ListGroup from 'react-bootstrap/ListGroup';

export default function ListItemCrypto({name, symbol, priceUSA, pricePOL}){
    return(
    <ListGroup horizontal className='mb-2'>
        <ListGroup.Item id="list-item" className="flex-fill nameCoin align-left">{name}</ListGroup.Item>
        <ListGroup.Item id="list-item" className="symbolCoin align-left">{symbol}</ListGroup.Item>
        <ListGroup.Item id="list-item" className="priceUSD align-right">{priceUSA}</ListGroup.Item>
        <ListGroup.Item id="list-item" className="pricePLN align-right">{pricePOL}</ListGroup.Item>
    </ListGroup>
    )

}