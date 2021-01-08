import React from 'react';
import {Row, Col, Button, Image} from 'react-bootstrap';
import Feature from './featureComponent';
import merry from '../image/merry.jpg';

function Entry(props) {
    function Application () {
        if (props.post.NumberOfApp >= 100) {
            return (<h6>100+ applicants</h6>);
        }
        return (<h6>{props.post.NumberOfApp} applicants</h6>);
    }
    return(
        <div>
            <Row className="mt-sm-2 mt-1 mb-sm-2 mb-1">
                <Col xs={12} sm={2} >
                    <Image src={merry} fluid />
                </Col>
                <Col xs={12} sm={{span:4}}>
                    <h4 className="text-truncate">{props.post.Title}</h4>
                    <h6>{props.post.Company}</h6>
                    <Application />
                </Col>
                <Col xs={12} sm={3} className="align-self-center">
                    <p><i className="fa fa-check-circle"></i> Recently view by employee.</p>
                </Col>
                <Col xs={10} sm={2} className="align-self-center">
                    <Button variant="primary" block>Status</Button>
                    <Feature title={props.post.Title} body={props.post.Body}/>
                </Col>
                <Col xs={2} sm={1} className="align-self-center">
                    <i className="fa fa-ellipsis-v"></i>
                </Col>
            </Row>
            <Row>
                <div style={{width:"100%", height:"3px", backgroundColor:"gray"}}></div>
            </Row>
        </div>
    );
}

export default Entry;