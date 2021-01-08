import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import Entry from './entryComponent';
import Feature from './featureComponent';
import {posting} from '../database/data';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedTab: "",
            appliedTab: "blue",
            display: "block",
            featureModal: 'none',
            featureCollapse: 'none',
        };
        this.tab = this.tab.bind(this);
        this.feature = this.feature.bind(this);
    }

    tab() {
        this.setState(
            {savedTab: (this.state.savedTab === "" ? 'blue' : ''),
            appliedTab: (this.state.appliedTab === "" ? 'blue' : ''),
            display: (this.state.appliedTab === "blue" ? 'none' : 'block')});
    }    

    feature(event) {
        if(event.target.name === "modal") {
            this.setState({
                featureModal: (this.state.featureModal === "block" ? "none" : 'block'),
                featureCollapse: "none"
            });
        } else {
            this.setState({
                featureModal: "none",
                featureCollapse: (this.state.featureCollapse === "block" ? "none" : 'block')
            });
        }
        console.log(this.state.featureCollapse);
    }

    render() {
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container fluid>
                        <Nav.Link href="#"><i className="fa fa-info"></i>ndeed</Nav.Link>
                        <div className="d-none d-lg-block mr-auto">
                            <Nav>
                                <Nav.Link href="#">Find jobs</Nav.Link>
                                <Nav.Link href="#">Company Reviews</Nav.Link>
                                <Nav.Link href="#">Find salaries</Nav.Link>
                            </Nav>
                        </div>
                        <div className="ml-auto d-none d-lg-block">
                            <Nav>
                                <Nav.Link href="#"><i className="fa fa-comments"></i></Nav.Link>
                                <Nav.Link href="#"><i className="fa fa-bell"></i></Nav.Link>
                                <Nav.Link href="#"><i className="fa fa-users"></i></Nav.Link>
                                <Nav.Link href="#" style={{color:'gray'}}>Employers/Post Job</Nav.Link>
                            </Nav>
                        </div>
                    </Container>
                </Navbar>
                <Container>
                    <Row>
                        <Col>
                            <Feature handle={this.feature}/>
                        </Col>
                    </Row>
                    <div className="betaBox">
                        <Row noGutters className="align-items-center">
                            <Col xs={1} sm={1}><i className="fa fa-exclamation fa-2x"></i></Col>
                            <Col xs={11} sm={11} className="mt-sm-2"><p><b>This dashboard is in beta.</b> It may not include every job application that you’ve submitted. Refer to your email for the latest status of your Indeed job applications</p></Col>
                        </Row>
                    </div>
                    <Row>
                        <Col className="mt-sm-3"><h1><b>My jobs</b></h1></Col>
                    </Row>
                    <Row style={{fontSize:"20px", color:"gray"}}>
                        <Col xs={3} sm={1} onClick={this.tab}>
                            <div style={{cursor:"pointer"}}>Saved</div>
                        </Col>
                        <Col xs={3} sm={1} onClick={this.tab}>
                            <div style={{cursor:"pointer"}}>Applied</div>
                        </Col>
                    </Row>
                    <Row noGutters className="mt-2">
                        <Col xs={3} sm={1}><div className="tabBar" style={{backgroundColor: this.state.savedTab}}></div></Col>
                        <Col xs={3} sm={1}><div className="tabBar" style={{backgroundColor: this.state.appliedTab}}></div></Col>
                        <Col><div className="tabBar"></div></Col>
                    </Row>
                    <div style={{display:this.state.display}}>
                        {posting.map((post) =><Entry post={post} modal={this.state.featureModal} collapse={this.state.featureCollapse}/>)}
                    </div>
                </Container>
            </div>
        );
    }
}

export default Layout;