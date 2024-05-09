import React, { useEffect, useState } from 'react'
import {JSON_OBJ} from '../model/model'
import ProductCard_App from '../component/ProductCard_App';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll_App:React.FC = () => {

  const [productList, setProductList] = useState<JSON_OBJ[]>([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async():Promise<void> => {

    let searchQuery = query.get('q') || '';

    let url:string = `http://localhost:4000/products?q=${searchQuery}`;
    // let url:string = `http://localhost:5000/products?q=${searchQuery}`;
    console.log("쿼리 값은?", url)
    let response:Response = await fetch(url);
    let data:JSON_OBJ[] = await response.json();
    setProductList(data);
  }

  useEffect(():void => {
    getProducts();
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard_App item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll_App