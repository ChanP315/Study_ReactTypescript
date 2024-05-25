import { useState } from 'react';

import {Button, Form} from 'react-bootstrap'

function ContactForm() {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number>(0);

  const getName = (event:React.ChangeEvent<HTMLInputElement>):void => {
    const target:EventTarget & HTMLInputElement = event.target;
    const value = target.value;
    
    console.log(value);
  }
  const getPhoneNumber = (event:React.ChangeEvent<HTMLInputElement>):void => {
    const target:EventTarget & HTMLInputElement = event.target;
    const value = target.value;

    console.log(value);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해 주세요." onChange={(event:React.ChangeEvent<HTMLInputElement>) => console.log(event.currentTarget.value)}/>{/*getName(event)*/}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>PhoneNumber</Form.Label>
        <Form.Control type="password" placeholder="PhoneNumber" onChange={(event:React.ChangeEvent<HTMLInputElement>) => getPhoneNumber(event)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        phoneNumber Add
      </Button>
    </Form>
  );
}

export default ContactForm;