import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
//import products from '../products';
import axios from 'axios';

const HomeScreens = () => {

    const [products, setProducts ] = useState ([]) 

    useEffect(() => {
        const fecthProducts = async() => {
            const {data} = await axios.get('/api/products')

           setProducts(data) 
        }

        fecthProducts()

    }, [] )

    return (
        <>
          <h1>Latest Products</h1>
          <Row>
              {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                  </Col>
              ))}
          </Row>
            
        </>
    )
}

export default HomeScreens
