import React, { useContext, useEffect } from 'react'
import swal from 'sweetalert';
import { User } from '../../App'
import audio from '../../assets/Buika.mp3'
import { client } from '../../lib/client';
import classes from './Music.module.css'

const Music = (props) => {
    let userData = useContext(User)
    useEffect(() => {
        userData.setShow(true)
        userData.setMusic(true)
    }, []);
  return (
    <>
    <div className={classes.Music} style={{transform: userData.show&&userData.music ? 'translateY(0)' : 'translateY(-100vh)',opacity: userData.show&&userData.music ? '1' : '0'}}>
        <h4>Allow Sound?</h4>
        <hr/>
        <div className={classes.Btns}>
            <p style={{padding:'10px 53px'}} onClick={() => {userData.setShow(false);userData.setMusic(false)}} className='button'>No</p>
            <p style={{padding:'10px 53px'}} onClick={() => {new Audio(audio).play();userData.setShow(false);userData.setMusic(false)}} className='button'>Yes</p>
        </div>
    </div>
    {props.children}

    </>
  )
}

export default Music