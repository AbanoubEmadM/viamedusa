import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import classes from './Discount.module.css'
import discountImg from '../../assets/discount.webp'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
const Discount = () => {
  const {t} = useTranslation()
  return (
    <Container className={classes.Discount}>
          <div>
            <h2>{t("discount_title")}</h2>
            <p className={classes.Desc}>{t("discount_desc")}</p>
            <button className='button'>
              <NavLink className={classes.DiscountBtn} to="/goldwdiamond_product">{t("discount_btn")}</NavLink>
            </button>
          </div>
          <div>
            <img className={classes.DiscountImg} src={discountImg} />
          </div>
    </Container>
  )
}

export default Discount