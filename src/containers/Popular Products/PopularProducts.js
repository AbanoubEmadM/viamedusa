import React, { memo } from 'react'
import {Container} from 'react-bootstrap';
import classes from './PopularProducts.module.css';
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import Spinner from '../../components/Spinner/Spinner';
import PopularProduct from './PopularProduct/PopularProduct';
import { User } from '../../App';
import withFetchProducts from '../../withFetchProducts';

const PopularProducts = ({prevProductMb,nextProductMb,prevArrowMbRef,index,fetchedProducts,userData,title,nextProduct,prevProduct,nextArrowRef,prevArrowRef,nextArrowMbRef}) => {
   let showProducts = <Spinner />
   if(fetchedProducts.products){
      showProducts = fetchedProducts.products.slice(0+index, 3 + index).map((product) => {
         let title = userData.lang === 'en' ? product.details : product.details_ar;
         let showTitle = '';
         for(let i = 0; i < title.length; i++){
            showTitle += title[i]
            if(i === 40){
               showTitle += '...'
               break;
            }
         }
			return <PopularProduct showTitle={showTitle} key={product.slug.current} product={product} />
      }
   )
   }  
   return (
      <User.Consumer>
         {(data) => 
            <Container id="popular-products" className={classes.PopularProducts}>
               <h2 className='underlined-heading'>{title}</h2>
               <div className={classes.Products}>
                  <span style={{cursor:'pointer'}} ref={prevArrowRef} className={classes.Arrow} onClick={(e) => prevProduct(e)}>
                     {data.lang === 'en' ? <BsArrowLeft size={25} /> :  <BsArrowRight size={25} />}
                  </span>
                  <>
                  {/* pc */}
                  <span style={{cursor:'pointer'}} ref={prevArrowMbRef} className={classes.ArrowMb} onClick={(e) => prevProductMb(e)}>
                     {data.lang === 'en' ? <BsArrowLeft size={20} /> :  <BsArrowRight size={20} />}
                  </span>
      
                  <div className={classes.MainProducts}>
                     {fetchedProducts !== null ? showProducts : <p>Waiting</p>}
                  </div>
      
                  <span style={{cursor:'pointer'}} ref={nextArrowMbRef} className={classes.ArrowMb} onClick={(e) => nextProductMb(e)} >
                     {data.lang === 'en' ? <BsArrowRight size={20} /> : <BsArrowLeft size={20} />}
                  </span>
      
                  </>
                  <span style={{cursor:'pointer'}} ref={nextArrowRef} className={classes.Arrow} onClick={(e) => nextProduct(e)} >
                     {data.lang === 'en' ? <BsArrowRight size={25} /> : <BsArrowLeft size={25} />}
                  </span>
               </div>
            </Container>
      
         }
      </User.Consumer>
   )
}
export default withFetchProducts(PopularProducts,`*[_type == "popular_products"]`,'popular_products')