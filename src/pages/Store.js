import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import FlowerItems from "../FlowerItems.json";
import StoreItem from "../components/StoreItem";


const Store = () => {
    return (

            <Container style={{ padding: "1rem"}}>
                <Row className="g-4">
                {FlowerItems.map(item => (
                    <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <StoreItem
                            item={item}/>
                    </Col>
                ))}
                </Row>

            </Container>


    );
};

export default Store;