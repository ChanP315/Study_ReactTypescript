import React, { useState } from 'react';

import {Row, Col, Form, Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';

// import { Contact, contactStatus } from '../module/redux_module';
import * as module from '../module/redux_module';
import { useDispatch } from 'react-redux';

const SearchBox:React.FC = () => {
  const dispatcher = useDispatch();  
  const contactList:module.contactStatus[] = useSelector((state:RootState)=>state.contactReducer.contactList);
  const [nameText, setNameText] = useState<string>("");
  let filterContactList:module.contactStatus[] = [];

  const getText = (event:React.ChangeEvent<HTMLInputElement>) => {
    const target:EventTarget & HTMLInputElement = event.target;
    const value:string = target.value;

    setNameText(value);
    console.log(nameText);
  }

  const searchPhonebook = (event:React.FormEvent<HTMLFormElement>):void =>{
    event.preventDefault();
    console.log("찾기!");

    dispatcher({type:module.SEARCH_CONTACT, payload:nameText})
  }

  return (
    <Form onSubmit={(event)=>searchPhonebook(event)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>검색하기</Form.Label>
        <Row>
          <Col lg={10}>
              <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={(event:React.ChangeEvent<HTMLInputElement>)=>getText(event)}/>
          </Col>
          <Col lg={2}>
              <Button type="submit">찾기</Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  )
}

export default SearchBox