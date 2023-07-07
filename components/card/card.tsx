import { Button, Card, PageItem } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

export default function CardComponent(props: any) {
    const MAX_CARACTERES = 100;

    const limitedCardBody = props.cardBody.length > MAX_CARACTERES
        ? `${props.cardBody.substring(0, MAX_CARACTERES)}...`
        : props.cardBody;
    return (
        <Card className='bg-dark text-light cardHover' style={{ minHeight: '28.5rem' }} >
            <Image src={props.image} alt='image from event' />

            <Card.Body>
                <Card.Title className="text-center">{props.date}</Card.Title>
                <Card.Text className="text-center">
                    {limitedCardBody}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <span className="text-danger moreInfo" style={{ cursor: 'pointer' }}>Ver detalhes do evento</span>
            </Card.Footer>
        </Card >
    )
}