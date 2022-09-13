import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import silverImg from '../../assets/silver.jpg';
import goldImg from '../../assets/gold.jpg';
import goldWithDiamondImg from '../../assets/goldwithdiamond.jpg';
import { NavLink } from 'react-router-dom';
import classes from './Categories.module.css';
import { useTranslation } from 'react-i18next';
const Categories = () => {
    const {t} = useTranslation();
    let catogires = [
        {img: silverImg, title: 'silver-products',link: '/silver-products'},
        {img: goldImg, title: 'gold-products',link: '/gold-products'},
        {img: goldWithDiamondImg, title: 'goldwdiamond_products',link: '/goldwdiamond_products'}
    ]
    let showCatgories = catogires.map(category => {
        return(
            <Col className={classes.Category} style={{textAlign:'center'}} key={category.title} lg={4} md={12} sm={12}>
                <NavLink to={category.link} className={classes.Title}>
                    <div className={classes.ImageWrapper} >
                        <img className={classes.CategoryImg} src={category.img} /><br />
                    </div>
                    <p>{t(`${category.title}`)}</p>
                 </NavLink>
            </Col>
        )
    })
  return (
        <Container>
            <Row className={classes.Categories}>
                {showCatgories}
            </Row>
        </Container>
  )
}

export default Categories