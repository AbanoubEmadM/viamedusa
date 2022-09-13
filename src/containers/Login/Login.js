import React, { useContext, useEffect, useState } from 'react'
import { FloatingLabel, Form , Container, Card} from 'react-bootstrap'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, signOut} from 'firebase/auth'
import {app} from '../../base'
import swal from 'sweetalert';
import {FcGoogle} from 'react-icons/fc'
import {GrClose} from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
import classes from './Login.module.css'
import Backdrop from '../../components/Banner/Banner';
import { User } from '../../App';

const Login = (props) => {
  const userData = useContext(User)
  const auth = getAuth(app)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const signIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(res => {
      userData.setShow(false)
      swal("Good Job!",'You Successufully loged in', 'success')
    })
    .catch(err => {
      setError(err.message);
      swal("Something went wrong!",err.message, 'error')
    })
  }
  const provider = new GoogleAuthProvider()
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        swal("Good Job!",'You Successufully loged in', 'success')
        userData.setShow(false)
      })
      .catch(err => {
        setError(err.message);
        swal("Something went wrong!",err.message, 'error')
      })
  }
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        swal("Good Job!", "Password reset email sent!", 'success')
        userData.setShow(false)

      })
      .catch(err =>{
        setError(err.message);
        swal("Something went wrong!","Try again later!", 'error')
      })
  }
  return (
    <User.Consumer>
      {(data) => 
      <>
          <Container className={classes.FormContainer} style={{transform: data.show&&data.login ? 'translateY(0)' : 'translateY(-100vh)',opacity: data.show&&data.login ? '1' : '0'}}>
            <h2 className={classes.LoginTitle}>Login</h2>
            <GrClose onClick={() => data.setShow(false)} className={classes.CloseModal} size={20} />
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className={['mb-3',classes.Input].join(" ")}
            >
              <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel className={classes.Input}  controlId="floatingPassword" label="Password" onChange={(e) => setPassword(e.target.value)}>
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
              <div className={classes.NestedLogin}>        
                <p onClick={resetPassword}style={{cursor:'pointer'}}>Reset Password ?</p>
                <FcGoogle cursor='pointer' onClick={loginWithGoogle} size={25} />
              </div>
              <a to='/' className={['button',classes.SubmitBtn].join(' ')} onClick={signIn}>Submit</a>
              <p><NavLink className={classes.CreateAccount} onClick={() => data.setShow(false)} to='/sign-up'>Create account ?</NavLink></p>
          </Container>
          {props.children}
      </>
    
      }
    </User.Consumer>

  )
}

export default Login