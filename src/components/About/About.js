import React from 'react'
import classes from './About.module.css'
import { Container } from 'react-bootstrap'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { User } from '../../App'

const About = () => {
  const {t} = useTranslation();
  return (
    <User.Consumer>
      {(data) => 
        <div className={classes.About}>
          <Container>
              <h2 className={classes.AboutTitle}>{t("jewellery_title")}</h2>
              <p style={{marginBottom:'2rem'}} className={classes.AboutDesc}>{t("jewellery_desc")}</p>
              <NavLink className={[classes.JewelleryBtn,'button'].join(" ")} to='/gold-products'>{t("jewellery_btn")} {data.lang === 'en' ? <BsArrowRight /> : <BsArrowLeft />}</NavLink> 
          </Container>
        </div>
      }
    </User.Consumer>
  )
}

export default About