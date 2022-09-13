import React, { useContext, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { urlForThumbnail } from '../../../lib/urlFor'; 
import { Col } from 'react-bootstrap';
import { User } from '../../../App';

const ProductItem = ({ product }) => {
  const userData = useContext(User)
    let title = userData.lang === 'en' ? product.details : product.details_ar;
    let showTitle = '';
    for(let i = 0; i < title.length; i++){
      showTitle += title[i]
      if(i === 30){
        showTitle += '...'
        break;
      }
    }
  return (
    userData.lang === 'en' ? 
    <Col className='Product' lg={3} md={6} sm={12}>
    <NavLink className='link' key={product.slug.current} to={"/product/"+product.slug.current}>
        <img src={urlForThumbnail(product.image[0].asset._ref)} className='ProductImage' />
        <p>{product.name}</p>
        <div className='Stars'>
            <AiFillStar color='#c3935b' />
            <AiFillStar color='#c3935b' />
            <AiFillStar color='#c3935b' />
            <AiFillStar color='#c3935b' />
            <AiOutlineStar color='#c3935b' />
        </div>
        <p className='ProductDesc'>{showTitle}</p>
    </NavLink>
    </Col>
    :
    <Col className='Product' lg={3} md={6} sm={12}>
    <NavLink className='link' key={product.slug.current} to={"/product/"+product.slug.current}>
        <img src={urlForThumbnail(product.image[0].asset._ref)} className='ProductImage' />
        <p>{product.name_ar}</p>
        <div className='Stars'>
            <AiFillStar color='#c3935b' />
            <AiFillStar color='#c3935b' />
            <AiFillStar color='#c3935b' />
            <AiFillStar color='#c3935b' />
            <AiOutlineStar color='#c3935b' />
        </div>
        <p className='ProductDesc'>{showTitle}</p>
    </NavLink>
    </Col>
  )
}

export default ProductItem