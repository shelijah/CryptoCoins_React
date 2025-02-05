import ListGroup from 'react-bootstrap/ListGroup';

export default function ListItemCrypto({name, symbol, priceUSA, pricePOL}){
    return(
    <ListGroup horizontal className='mb-2'>
        <ListGroup.Item className="flex-fill nameCoin">{name}</ListGroup.Item>
        <ListGroup.Item className="symbolCoin">{symbol}</ListGroup.Item>
        <ListGroup.Item className="priceUSD">{priceUSA}</ListGroup.Item>
        <ListGroup.Item className="pricePLN">{pricePOL}</ListGroup.Item>
    </ListGroup>
    )

}