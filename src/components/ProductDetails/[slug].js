import { Container } from '@mui/system';
import React, { useContext, useEffect, useRef } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { client } from '../../lib/client';
import { urlForThumbnail } from '../../lib/urlFor';
import PopularProducts from '../../containers/Popular Products/PopularProducts'
import { addDoc, collection,doc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../base';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import classes from './Slug.module.css';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import swal from 'sweetalert'
import Spinner from '../../components/Spinner/Spinner';
import { useTranslation } from 'react-i18next';
import { User } from '../../App';

const ProductDetails = () => {
	const userData = useContext(User)
    const {slug} = useParams()
    useEffect(() => {
		userData.setQuantity(1)
		window.scroll(0,0);
		let isCanceled = false;
		if(!isCanceled){
			client.fetch(`*[slug.current == "${slug}"] `)
			.then((data) => {userData.setBuyProduct(data[0])});
		}
		return() => {
			isCanceled = true;
			console.log(slug)
		}
    }, [slug]);
    const incrementQuantity = () => {
		userData.setQuantity(userData.quantity + 1)
		minusBtn.current.style.pointerEvents = 'all'
	}
	let minusBtn = useRef()
	const decrementQuantity = () => {
		if(userData.quantity === 1){
			minusBtn.current.style.pointerEvents = 'none'
		}else{
			minusBtn.current.style.pointerEvents = 'all'
			userData.setQuantity(userData.quantity - 1)
		}
	}
	const query = collection(db, `users/${userData.isAuth}/children`)
	const [docs, loading, error] = useCollectionData(query)

	const handleAddToCart = () => {
		let addedProduct = {
			title: userData.buyProduct.name,
			title_ar: userData.buyProduct.name_ar,
			img: userData.buyProduct.image,
			body_ar: userData.buyProduct.details_ar,
			quantity: userData.quantity,
			id: userData.buyProduct.id,
			path:'',
			slug: userData.buyProduct.slug.current
		}
		const docRef = collection(db,`users/${userData.isAuth}/children`)
		let find = docs.find((item) => item.title === addedProduct.title);
		if(find){
			swal('Sorry !', 'This item already added to cart !', 'error')
		}
		else if(userData.isAuth){
			addDoc(docRef,addedProduct)
			.then((d) =>{
				setDoc(doc(db,`users/${userData.isAuth}/children/${d._key.path.segments[3]}`),{
					path:d._key.path.segments[3]
				},{merge:true})
			})
		}else{
			swal("Sorry!","You have to login first", 'error')
		}
  	}	
	const {t} = useTranslation()  
  return (
	<User.Consumer>
		{(data) =>
		    <Container>
			{data.buyProduct ? 
			<Container>
				{data.lang === 'en' ?
					<div className={classes.ProductItem}>
						<img className={classes.ProductImage} src={urlForThumbnail(data.buyProduct.image[0].asset._ref)} />
						<div className={classes.ProductDetails}>
							<h2 className={classes.ProductTitle}>{data.buyProduct.category}</h2>
							<div className={classes.Stars}>
								<AiFillStar color='#c3935b' />
								<AiFillStar color='#c3935b' />
								<AiFillStar color='#c3935b' />
								<AiFillStar color='#c3935b' />
								<AiOutlineStar color='#c3935b' />
							</div>
							<h5>{t("details")}:</h5>
							<h6>{data.buyProduct.name}</h6>
							<p>{data.buyProduct.details}</p>
							<div className={classes.Controls}>
								<div className={classes.Quantity}>
									<span style={{borderRight: '1px solid #ddd'}} ref={minusBtn} className={classes.QuantityControl} onClick={decrementQuantity}><AiOutlineMinus size={15} /></span>
									<span className={classes.QuantityNumber}>{data.quantity}</span>
									<span style={{borderLeft: '1px solid #ddd'}} className={classes.QuantityControl} onClick={incrementQuantity}><AiOutlinePlus size={15} /></span>
								</div>
								<button style={{margin:'0'}} type='button' className={classes.AddToCart} onClick={handleAddToCart}>{t("addtocart")}</button>
							</div>
						</div>
					</div>
					:
					<div className={classes.ProductItem}>
					<img className={classes.ProductImage} src={urlForThumbnail(data.buyProduct.image[0].asset._ref)} />
					<div className={classes.ProductDetails}>
						<h2 className={classes.ProductTitle}>{data.buyProduct.category_ar}</h2>
						<div className={classes.Stars}>
							<AiFillStar color='#c3935b' />
							<AiFillStar color='#c3935b' />
							<AiFillStar color='#c3935b' />
							<AiFillStar color='#c3935b' />
							<AiOutlineStar color='#c3935b' />
						</div>
						<h5>{t("details")}:</h5>
						<h6>{data.buyProduct.name_ar}</h6>
						<p>{data.buyProduct.details_ar}</p>
						<div className={classes.Controls}>
							<div className={classes.Quantity}>
								<span style={{borderRight: '1px solid #ddd'}} ref={minusBtn} className={classes.QuantityControl} onClick={decrementQuantity}><AiOutlineMinus size={15} /></span>
								<span className={classes.QuantityNumber}>{data.quantity}</span>
								<span style={{borderLeft: '1px solid #ddd'}} className={classes.QuantityControl} onClick={incrementQuantity}><AiOutlinePlus size={15} /></span>
							</div>
							<button style={{margin:'0'}} type='button' className={classes.AddToCart} onClick={handleAddToCart}>{t("addtocart")}</button>
						</div>
					</div>
				</div>
	
				}
				<PopularProducts reload />
			</Container>
			: 
			<Spinner />
			}
			</Container>
	
		}
	</User.Consumer>
  )
}

export default ProductDetails