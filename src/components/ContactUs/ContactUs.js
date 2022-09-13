import React from 'react'
import { Container, Row, Col, FloatingLabel,Form, InputGroup } from 'react-bootstrap'
import classes from './Contact.module.css'
import image from '../../assets/discount.webp'
import { useTranslation } from 'react-i18next'
const ContactUs = () => {
  const { t } = useTranslation()
  return (
    <Container style={{margin: '50px auto'}}>
      <h2 className='underlined-heading'>{t("contact_with_us")}</h2>
      <Row>
        <Col lg={6} md={12}>
        <Form action="https://formsubmit.co/hz.botrus@gmail.com" method="POST">
            <FloatingLabel
              controlId="floatingInput"
              label={t("email")}
              className='mb-3'
            >
              <Form.Control required type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingPassword" label={t("name")} >
              <Form.Control required type="text" placeholder={t("name")} />
            </FloatingLabel>

            <InputGroup label="Message">
              <Form.Control className='mb-3' required placeholder={t("message")} style={{height:'354px'}} as="textarea" aria-label="With textarea" />
            </InputGroup>
            <button className='button' type="submit">{t("submit")}</button>
        </Form>
        </Col>
        <Col lg={6} md={12}>
          <img className={classes.ContactImg} src={image} />
        </Col>
      </Row>
    </Container>
  )
}

export default ContactUs