import { useState, useEffect } from 'react';
import ListItemCrypto from '../listItem/listitem';
import SearchItem from '../SearchItem/searchitem';
import cryptoApi from '../cryptoApi';
import moneyApi from '../moneyApi';
import './itemCoin.css';

export default function ItemCoin() {
    const [coinInfo, setCoinInfo] = useState([]);
    const [moneyInfo, setMoneyInfo] = useState({ rates: [] });
    const [loadingCoins, setLoadingCoins] = useState(true);
    const [loadingMoney, setLoadingMoney] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCrypto = async () => {
            try {
                const data = await cryptoApi();
                setCoinInfo(data || []);
            } catch (err) {
                setError(err.message || 'Błąd pobierania danych.');
            } finally {
                setLoadingCoins(false);
            }
        };
        fetchCrypto();
    }, []);

    useEffect(() => {
        const fetchMoney = async () => {
            try {
                const data = await moneyApi();
                setMoneyInfo(data || { rates: [] });
            } catch (err) {
                setError(err.message || 'Błąd pobierania danych.');
            } finally {
                setLoadingMoney(false);
            }
        };
        fetchMoney();
    }, []);

    if (loadingCoins || loadingMoney) return <div>Ładowanie danych...</div>;
    if (error) return <div>Błąd: {error}</div>;

    const pln = moneyInfo.rates.length > 0 ? moneyInfo.rates[0].ask : 0;

    const filteredCoins = coinInfo.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) && coin.quotes.USD.price >= 0.01
    );

    return (
        <>

            <SearchItem setSearchTerm={setSearchTerm} />
            <ListItemCrypto 
                key='Coin Name'
                name='Coin Name' 
                symbol='Symbol' 
                priceUSA='Price USD'
                pricePOL='Price PLN'
            />
            {filteredCoins.length === 0 ? (
                <div>Nie znaleziono monet.</div>
            ) : (
                filteredCoins.map((a) => (
                    <ListItemCrypto
                        key={`${a.rank}-${a.id}`}
                        name={a.name}
                        symbol={a.symbol}
                        priceUSA={a.quotes.USD.price.toFixed(2)}
                        pricePOL={(a.quotes.USD.price * pln).toFixed(2)}
                    />
                ))
            )}
        </>
    );
}