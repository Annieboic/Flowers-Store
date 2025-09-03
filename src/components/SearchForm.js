import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";


const SearchForm = () => {
    return (
        <div>

            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Add to Cart</Button>
                    </Col>
                </Row>
            </Form>

        </div>
    );
};

export default SearchForm;