import React, { memo } from 'react'
import { Container, Row} from 'react-bootstrap'
import { Spinner } from 'react-bootstrap';
import bannerImg from '../../assets/TELEMMGLPICT000241870133_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpg'
import ProductItem from './ProductItem/ProductItem';
import Banner from '../../components/Banner/Banner';
import withFetchProducts from '../../withFetchProducts';

const GoldWithDiamond = ({ fetchedProducts,title }) => {
	let allProducts = <Spinner />;
	if(fetchedProducts.products){
		allProducts = fetchedProducts.products.map(product => ( 
			<ProductItem key={product.slug.current} product={product} />
		))
	}
  return (
	<div id='goldwithdiamonds'>
		<Banner image={bannerImg} title="Gold with Diamond Products" />
		<Container style={{marginTop:'30px'}}>
			<h2 className='underlined-heading'>{title}</h2>
			<Row style={{justifyContent:'center'}}>
				{allProducts}
			</Row>
		</Container>
	</div>
  )
}

export default memo(withFetchProducts(GoldWithDiamond, `*[_type == "gold_with_diamonds"]`, 'gold_diamond_products_footer'))