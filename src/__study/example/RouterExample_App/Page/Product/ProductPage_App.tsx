import React from 'react';
import {useSearchParams} from 'react-router-dom'

const ProductPage_App:React.FC = () => {

  let [query, setQuery] = useSearchParams()
  console.log("query value : ",query.get('q'));
  
  return (
    <React.Fragment>
      <h1>
        Product All VIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
      </h1>
    </React.Fragment>
  )
}

export default ProductPage_App;