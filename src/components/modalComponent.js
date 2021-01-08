import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class ModalFeature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalButton: false
        };
        this.modalBut = this.modalBut.bind(this);
    }

    modalBut() {
        this.setState(
            {modalButton: (this.state.modalButton === false ? true : false)})
    }

    render() {
        return(
            <>
                <Button variant="primary" onClick={this.modalBut} block>Detail</Button>
                
                <Modal show={this.state.modalButton} onHide={this.modalBut} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.body}
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default ModalFeature;