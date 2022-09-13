import React, { memo } from 'react'
import { Container, Row} from 'react-bootstrap'
import Spinner from '../../components/Spinner/Spinner';
import ProductItem from './GoldProductItem/ProductItem';
import bannerImg from '../../assets/b2.jpg'
import Banner from '../../components/Banner/Banner';
import withFetchProducts from '../../withFetchProducts';

const Gold = ({fetchedProducts,userData,title}) => {
	let allProducts = <Spinner />;
	if(fetchedProducts.products){
		allProducts = fetchedProducts.products.map(product => ( 
			<ProductItem key={product.slug.current} product={product} />
		))
	}
	return (
		<div id='gold'>
			<Banner image={bannerImg} title="Gold Products" />
			<Container style={{marginTop:'30px', justifyContent:'center'}}>
				<h2 className='underlined-heading'>{title}</h2>
				<Row style={{justifyContent:'center'}}>
					{allProducts}
				</Row>
			</Container>
		</div>
	)
}

export default withFetchProducts(Gold, `*[_type == "gold_product"]`, 'gold-products')