import React from 'react';
import {Card, Button, Col, Row} from 'react-bootstrap';

function Feature(props) {
    return(
        <Card border="secondary">
            <Card.Header><h4>Desire Features</h4></Card.Header>
            <Card.Body>
                <h7>A feature that I would like to see in Indeed is an option that will allow me to view the job posting. This feature will let the user see the applied job posting, even when it was deleted of remove.</h7>
                <Row className="mt-1">
                    <Col xs={12} sm={{span:3}}>
                        <Button name="modal" onClick={props.handle} block>Button Modal Feature</Button>
                    </Col>
                    <Col xs={12} sm={{span:3}}>
                        <Button name="collapse" onClick={props.handle} block>Collapse Feature</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Feature;