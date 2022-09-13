import React, { useContext, useEffect, useRef } from 'react'
import classes from './CartProduct.module.css'
import { urlForThumbnail } from '../../../lib/urlFor';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { collection, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../../base';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { NavLink } from 'react-router-dom';
import { User } from '../../../App';

const CartProduct = ({product}) => {
    const userData = useContext(User)
    useEffect(() => {
        userData.setQuantity(product.quantity)
    })
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
    const docRef = collection(db, `users/${userData.isAuth}/children`)
    const deleteProduct = () => {
        deleteDoc(doc(db, `users/${userData.isAuth}/children/${product.path}`))
    }
	const [docs, loading, error] = useCollectionData(docRef)
	const {t} = useTranslation()  
    return (
        <div className={classes.Product} key={Math.random()}>
        {userData.lang === 'en' ?
            <>
            <div className={classes.ProductDetails}>
                <img className={classes.ProductImage} src={urlForThumbnail(product.img[0].asset._ref)} />
                <div>
                    <h4 className={classes.ProductTitle}>{product.title} ({product.quantity})</h4>
                    <span className={classes.Remove} onClick={deleteProduct}>{t("remove")}</span>
                </div>
            </div>
        </>
        :
        <>
            <div className={classes.ProductDetails}>
                <img className={classes.ProductImage} src={urlForThumbnail(product.img[0].asset._ref)} />
                <div>
                    <h4 className={classes.ProductTitle}>{product.title_ar} ({product.quantity})</h4>
                    <span className={classes.Remove} onClick={deleteProduct}>{t("remove")}</span>
                </div>
            </div>
        </>
        }
    </div>
    )
}

export default CartProduct