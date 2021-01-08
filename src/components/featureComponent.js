import React from 'react';
import {Card, Button, Col, Row} from 'react-bootstrap';

function Feature(props) {
    return(
        <>
            <Card border="secondary">
                <Card.Header><h4>Desire Features</h4></Card.Header>
                <Card.Body>
                    <h7>A feature that I would like to see in Indeed is an option that will allow me to view the job posting. This feature will let the user see the applied job posting, even when it was deleted of remove.</h7>
                    <Row className="mt-1">
                        <Col xs={12} sm={{span:5}} xl={{span:3}}>
                            <Card border="info" style={{minHeight:"200px"}}>
                                <Card.Body>
                                    <h7>The feature can be a button that will pop a modal to show the detail.</h7>
                                    <div className="mt-5 mt-sm-3">
                                        <Button name="modal" onClick={props.handle} block>Button Modal Feature</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={{span:5}} xl={{span:3}} className="mt-1 mt-sm-0">
                            <Card border="info" style={{minHeight:"200px"}}>
                                <Card.Body>
                                    <h7>The feature can be a button that will drop down a textarea with the job posting.</h7>
                                    <div className="mt-5 mt-sm-3">
                                        <Button name="collapse" onClick={props.handle} block>Collapse Feature</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default Feature;