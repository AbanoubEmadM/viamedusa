import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import classes from './Lineup.module.css'
import LineupImg from '../../assets/lineup.webp'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { User } from '../../App.js';

const Lineup = () => {
  const userData = useContext(User)
  const {t} = useTranslation()
  return (
    <div className={classes.Lineup} style={{transform: userData.lang === 'ar' ? 'rotateY(180deg)' : 'rotate(0)'}}>
        <Container className={classes.LineupContainer} style={{justifyContent: userData.lang === 'ar' ? 'end' : 'start'}}>
            <div className={classes.LineupContent} style={{transform: userData.lang === 'ar' ? 'rotateY(180deg)' : 'rotate(0)'}}>
                <h2>{t("lineup_title")}</h2>
                <p className={classes.LineupDesc}>{t("lineup_desc")}</p>
                <NavLink className='button' to="/silver-products">{t("lineup_btn")}</NavLink>
            </div>
        </Container>
    </div>
  )
}

export default Lineup