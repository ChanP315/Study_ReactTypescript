import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { JSON_OBJ } from '../model/model'
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';


const ProductDetail_App:React.FC = () => {

  let{id} = useParams<string>();

  const [product, setProduct] = useState<JSON_OBJ>();

  const getProductDetail = async():Promise<void> => {
    const url:string = `http://localhost:5000/products/${id}`
    const response:Response = await fetch(url);
    const data:JSON_OBJ = await response.json();
    console.log(data);

    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail();
  },[])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <Row>
            {product?.title}
          </Row>
          <Row>
            {product?.price}
          </Row>
          <Row>
            {product?.choice? "choiceTrue":"ChiceFalse"}
          </Row>
          <Row>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product?.size?.map((element)=> (
                <Dropdown.Item href="#/action-1">{element}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          </Row>
          <Row>
            <Button>추가</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail_App