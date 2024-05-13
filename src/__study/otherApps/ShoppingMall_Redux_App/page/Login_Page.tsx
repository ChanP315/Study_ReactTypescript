import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../redux/actions/loginAction';

interface Ownprops {
  setAuthecticate:(bool:boolean) => void;
}

const Login_Page:React.FC<Ownprops> = ({setAuthecticate}) => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const loginUser = (event:React.FormEvent):void => {
    event.preventDefault();
    console.log("login!!!!!!!!!!succ!!!!!!!!!");
    dispatcher(loginAction.login(id, pw));
    navigate('/');
  }

  return (
    <Container>
    <Form onSubmit={(event) => loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setId(event.currentTarget.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setPw(event.currentTarget.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Login
      </Button>
    </Form>
    </Container>
  );
}

export default Login_Page