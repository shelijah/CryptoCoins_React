import Card from 'react-bootstrap/Card';
import './about.css';

export default function About() {
  return (
    <Card className="p-4">
      <h2>O stronie</h2>
      <p>Ta aplikacja umożliwia przeglądanie kryptowalut, ich aktualnych cen i wyszukiwanie wybranych monet.</p>
      <p>Wykorzystuje API CoinPaprika oraz NBP, a także React i Bootstrap do prezentacji danych.</p>
    </Card>
  );
}
