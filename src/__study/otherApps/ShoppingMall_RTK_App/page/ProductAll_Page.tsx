import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

import {productAction} from '../redux/actions/productAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { productState } from '../module/redux_module';
import { selectProductList } from '../redux/module/product';

const ProductAll_Page:React.FC = () => {

  const dispatcher = useDispatch();
  // const productList = useSelector((state:RootState)=>state.product.productList);
  const productList = useSelector(selectProductList);

  const [query, setQuery] = useSearchParams();

  const getProducts = ():void => {
    let searchQuery = query.get('q') || '';

    dispatcher(productAction.getProducts(searchQuery));
  }

  useEffect(():void => {
    getProducts();
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, index) => (
            <Col lg={3} key={index}>
              <ProductCard item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll_Page