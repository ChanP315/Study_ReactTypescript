import React, { useState } from 'react';

import {Button, Form} from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { RootState } from '../redux';

function ContactForm() {

  const dispatcher = useDispatch();
  const contactList = useSelector((state:RootState)=>state.contactReducer.contactList);

  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number>(0);

  const getName = (event:React.ChangeEvent<HTMLInputElement>):void => {
    const target:EventTarget & HTMLInputElement = event.target;
    const value:string = target.value;

    console.log(value);
    setName(value);
  }
  const getPhoneNumber = (event:React.ChangeEvent<HTMLInputElement>):void => {
    const target:EventTarget & HTMLInputElement = event.target;
    const value:string = target.value;
    
    console.log(value);
    setPhoneNumber(Number(value));
  }

  const addContact = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatcher({type:"ADD_CONTACT", payload:{name, phoneNumber}});
  }

  return (
    <React.Fragment><Form onSubmit={(event) => addContact(event)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해 주세요." onChange={(event:React.ChangeEvent<HTMLInputElement>) => setName(event.currentTarget.value)}/>{/*getName(event)*/}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>PhoneNumber</Form.Label>
        <Form.Control type="number" placeholder="PhoneNumber" onChange={(event:React.ChangeEvent<HTMLInputElement>) => getPhoneNumber(event)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        phoneNumber Add
      </Button>
    </Form>
    </React.Fragment>
  );
}

export default ContactForm;