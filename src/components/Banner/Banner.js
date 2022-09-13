import React from 'react'
import classes from './Banner.module.css'
import img from '../../assets/1000_F_193620212_UWa1hpHPD3aMebIAiXm3XI7WxUMdx7cI.jpg'

const Banner = (props) => {
  return (
    <div className={classes.Banner}>
      <div className={classes.Overlay}></div>
      <div className={classes.BannerContent}>
        <h3 className={classes.BannerTitle}>{props.title}</h3>
        <p className={classes.BannerDesc}>Save more with coupons & up to 70% off!</p>
      </div>
      <div className={classes.BannerWrapper}>
        <img className={classes.BannerImg} src={img} />
      </div>
    </div>
  )
}

export default Banner