import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import  {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import classes from './Home.module.css';
import cookie from 'js-cookie'
import { useTranslation } from 'react-i18next';
import { User } from '../../App';

const HomeSection = () => {
  const {t} = useTranslation()  
  return (
    <User.Consumer>
      {(data) => 
        <div className={classes.Home} style={{transform: data.lang === 'en' ? 'scaleX(1)' : 'scaleX(-1)'}}>
          <div className={classes.HomeContent} style={{transform: data.lang === 'en' ? 'scaleX(1)' : 'scaleX(-1)'}}>
            <Container> 
              <h2 className={classes.HomeTitle} >
                {t("home_title")}<br /> {t("home_title_br")}
              </h2>
              <p className={classes.HomeDesc}>{t("home_desc")}</p>
            </Container>
          </div>
        </div>
      
      }
    </User.Consumer>
  )
}

export default HomeSection