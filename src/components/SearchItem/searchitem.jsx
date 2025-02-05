import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './searchitem.css'

export default function SearchItem({ setSearchTerm }) {
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value); // Aktualizacja stanu w komponencie nadrzędnym
    };

    return (
        <InputGroup className="mb-3">
            <Form.Control
                id="form-control"
                placeholder="Search any Coins"
                aria-label="Search any Coins"
                aria-describedby="basic-addon2"
                onChange={handleInputChange} // Wywołanie funkcji podczas wpisywania tekstu
            />
            <Button variant="outline-secondary" id="button-addon2">
                Search
            </Button>
        </InputGroup>
    );
}