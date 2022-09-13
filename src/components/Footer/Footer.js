import React, { useContext } from 'react'
import {Container, Row, Col, Lis} from 'react-bootstrap'
import {IoIosArrowForward} from 'react-icons/io'
import classes from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { User } from '../../App'
//    transform: rotate(180deg);
const Footer = () => {
    const userData = useContext(User)
  const {t} = useTranslation()
  return (
    <div>
        <Container>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <h4>{t("aboutus_footer")}</h4>
                    <ul className={classes.List}>
                        <li className={classes.Item}>{t("address_footer")}</li>
                        <li className={classes.Item}>(+00) 1234 5648 90</li>
                        <li className={classes.Item}>email@2022.com</li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <h4>{t("products_footer")}</h4>
                    <ul className={classes.List}>
                        <NavLink to='/gold-products' className={classes.Item}>{t("gold_products_footer")}</NavLink>
                        <NavLink to='/silver-products' className={classes.Item}>{t("silver_products_footer")}</NavLink>
                        <NavLink to='/goldwdiamond_product' className={classes.Item}>{t("gold_diamond_products_footer")}</NavLink>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <h4>{t("myaccount_footer")}</h4>
                    <ul className={classes.List}>
                        <NavLink to='/sign-up' className={classes.Item}>{t("signup_footer")}</NavLink>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <h4>{t("subscribe_footer")}</h4>
                    <p className={classes.Subscribe}>{t("subscribe_desc_footer")}</p>
                    <form className={classes.Form}>
                        <input className={classes.Email} type="email" placeholder={t("your_email_footer")} />
                        <button style={{transform: userData.lang === 'ar' ? 'rotate(180deg)' : null}} className={[classes.Submit,'button'].join(" ")} type="submit">
                            <IoIosArrowForward />
                        </button>
                    </form>
                </Col>
            </Row>
            <div className={classes.Copyright}>
                <p>© 2022, Medusa Jewelles 2022</p>
            </div>
        </Container>
    </div>
  )
}

export default Footer