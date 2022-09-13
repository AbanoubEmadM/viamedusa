import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Spinner from '../../components/Spinner/Spinner';
import { collection } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../../base';
import CartProduct from './CartProduct/CartProduct';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import classes from './Cart.module.css'
import { User } from '../../App';

const Cart = () => {
	const userData = useContext(User)
	let addedItems = <Spinner />
	const query = collection(db, `users/${userData.isAuth}/children`)
	const [docs, loading, error] = useCollectionData(query)
	if(docs){
		addedItems = docs.map(product =>{
			return (
				<div key={Math.random()}>
					<CartProduct product={product} />
					<hr /> 
				</div>
			)		
		}
		)
	}
	const { t } = useTranslation()
	if(docs && docs.length && userData.isAuth){
		console.log('first')
	}
	return (
		<Container className={classes.Cart}>
			<h2> {docs && docs.length !== 0 ? <p>{t("your_products")} :</p> : null}</h2>
			<h5>{docs && docs.length !== 0 ? <p>{t("items")} ({!loading ? docs.length : 0})</p> : null}</h5>
			{userData.isAuth ?
				docs && docs.length !== 0 ? addedItems : <h2 style={{textAlign:'center'}}>{t("noitemstoshow")}</h2>
				:
				<h2 style={{textAlign:'center'}}>{t("loginoesiignup")}</h2>
			}
			{docs && docs.length !== 0 && userData.isAuth ? <NavLink className='button' to="/buynow">{t("buynow")}</NavLink> : null}
		</Container>
	)
}

export default Cart