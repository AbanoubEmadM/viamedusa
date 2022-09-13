import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import classes from './Silverproduct.module.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { client } from '../../../lib/client';
import { urlForThumbnail } from '../../../lib/urlFor'; 
import { User } from '../../../App';
import axios from 'axios';

const SilverProduct = ({product,lang}) => {
  const userData = useContext(User)
  let title = userData.lang === 'en' ? product.details : product.details_ar;
  let showTitle = '';
  for(let i = 0; i < title.length; i++){
    showTitle += title[i]
    if(i === 50){
      showTitle += '...'
      break;
    }
  }
  return (
    <>
    {lang === 'en' ?
      <Link className={[classes.Product,'link'].join(" ")} to={"/product/"+product.slug.current} key={product.slug.current} lg={3} md={6} sm={12}>
        <img src={urlForThumbnail(product.image[0].asset._ref)} className={classes.ProductImage} />
        <p className='link'>{product.name}</p>
        <div className={classes.Stars}>
            <AiFillStar color='#c3935b' />
            <AiFillStar color='#c3935b' />
            <AiFillStar color='#c3935b' />
            <AiFillStar color='#c3935b' />
            <AiOutlineStar color='#c3935b' />
        </div>
        <p className={classes.ProductDesc}>{showTitle}</p>
      </Link>
      :
      <Link to={"/product/"+product.slug.current} className={[classes.Product,'link'].join(" ")} key={product.slug.current} lg={3} md={6} sm={12}>
      <img src={urlForThumbnail(product.image[0].asset._ref)} className={classes.ProductImage} />
      <p>{product.name_ar}</p>
      <div className={classes.Stars}>
          <AiFillStar color='#c3935b' />
          <AiFillStar color='#c3935b' />
          <AiFillStar color='#c3935b' />
          <AiFillStar color='#c3935b' />
          <AiOutlineStar color='#c3935b' />
      </div>
      <p className={classes.ProductDesc}>{showTitle}</p>
  </Link>

    }
    </>

  )
}

export default SilverProduct