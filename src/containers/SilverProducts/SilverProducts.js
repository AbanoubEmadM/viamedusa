import React, { useContext, useEffect, useState } from 'react'
import Spinner from '../../components/Spinner/Spinner';
import { Container, Row } from 'react-bootstrap';
import bannerImg from '../../assets/b1.jpg'
import SilverProduct from './SilverProduct/SilverProduct';
import Banner from '../../components/Banner/Banner';
import withFetchProducts from '../../withFetchProducts';
const fetchedProducts = ({fetchedProducts,userData,title}) => {
  
  let fetchedProductsShow = <Spinner />
  if(fetchedProducts.products){
    fetchedProductsShow = fetchedProducts.products.map(product => (   
      <SilverProduct lang={userData.lang} key={product.slug.current} product={product} />
    ))
  }
  return(
      <div id='silver'>
        <Banner image={bannerImg} title="Silver Products" />
        <Container>
        <h2 className='underlined-heading'>{title}</h2>
          <Row>
            {fetchedProductsShow}
          </Row>
        </Container>
      </div>
  )
}

export default withFetchProducts(fetchedProducts,`*[_type == "silver_products"]`,'silver-products')