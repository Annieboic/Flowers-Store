import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const StoreItem = ({item}) => {
    return (
        <Card>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>

                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>
    );
};

export default StoreItem;