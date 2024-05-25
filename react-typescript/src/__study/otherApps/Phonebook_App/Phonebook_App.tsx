import React from 'react';
import './css/Phonebook.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

const Phonebook_App = () => {
  return (
    <React.Fragment>
        <h1 className='title'>연락처</h1>
        <Container>
            <Row>
                <Col>
                    <ContactForm/>
                </Col>
                <Col>
                    <ContactList/>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default Phonebook_App