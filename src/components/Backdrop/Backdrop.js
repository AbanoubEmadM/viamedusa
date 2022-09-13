import React from 'react'
import { User } from '../../App'
import classes from './Backdrop.module.css'

const Backdrop = () => {
  return (
    <User.Consumer>
       {(data) => data.show ?  <div onClick={() => {
        data.setShow(false)
        data.setMusic(false)
        data.setLogin(false)
       }} className={classes.Backdrop}>{data.children}</div> : null}
    </User.Consumer>
  )
}

export default Backdrop