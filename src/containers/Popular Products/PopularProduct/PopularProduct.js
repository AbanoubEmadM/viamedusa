import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { User } from '../../../App';
import { urlForThumbnail } from '../../../lib/urlFor';
import classes from './PopularProduct.module.css';

const PopularProduct = ({product,reload,showTitle}) => {
  const userData = useContext(User)
  return (
    <div>
      {userData.lang === 'en' ?
        <Link className={classes.Product} key={product.slug.current} to={`/product/${product.slug.current}`}>
          <img className={classes.ProductImg} src={urlForThumbnail(product.image[0].asset._ref)} />
          <p>{product.name} </p>
          <p style={{fontSize:'14px'}}>{showTitle} </p>
        </Link>
        :
        <Link className={classes.Product} key={product.slug.current} to={`/product/${product.slug.current}`}>
          <img className={classes.ProductImg} src={urlForThumbnail(product.image[0].asset._ref)} />
          <p>{product.name_ar} </p>
          <p style={{fontSize:'14px'}}>{showTitle} </p>
        </Link>
      }
    </div>
  )
}

export default PopularProduct