import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from './SpecialOrder.module.css'
import img from '../../assets/specialorder.jpg'
import { useTranslation } from 'react-i18next'

const SpecialOrder = () => {
  const { t } = useTranslation()
  return (
    <Container style={{marginBottom:'30px'}}>
      <div className={classes.Desc}>
        <h2>{t("needspecialorder")}</h2>
        <h5>{t("leavemessage")}</h5>
      </div>
      <Row>
      <Col lg={6} md={12}>
        <form action="https://formsubmit.co/hz.botrus@gmail.com" method="POST">
          <input required style={{width:'100%'}} name="First name" className={classes.Input} type="text" placeholder={t("firstname")}/>
          <input required style={{width:'100%'}} name="Last name" className={classes.Input} type="text" placeholder={t("lastname")}/>
          <input required style={{width:'100%'}} name="Email" className={classes.Input} type="email" placeholder={t("email")}/>
          <textarea required className={classes.Input} style={{width:'100%',height:'285px'}} placeholder={t("details")} />
          <button type='submit' className='button'>{t("submit")}</button>
        </form>
      </Col>
      <Col lg={6} md={12}>
        <img src={img} />
      </Col>

      </Row>
    </Container>
  )
}

export default SpecialOrder