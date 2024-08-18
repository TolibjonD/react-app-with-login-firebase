import React, { useState } from 'react'
import { images } from '../constants'
import {  Input } from './ui'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authFailure, authStart, authSuccess } from '../slice/auth'
import { Button } from '@mui/material'
import {  BadgeTwoTone, EmailTwoTone, VpnKeyTwoTone } from '@mui/icons-material'
import { setDoc, doc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../service/firebase'
import { toast } from 'react-toastify'

const Register = () => {

  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  const registerHandler = async(e) => {
    e.preventDefault();
    dispatch(authStart())
    const user = {
      firstname,
      email,
      password,
      uid: null,
      joined_at: null 
    }    
    try {
      await createUserWithEmailAndPassword(auth,email,password)
      const newUser = auth.currentUser
      console.log(newUser);
      await setDoc(doc(db, "Users", newUser.uid), user)
      user.uid = newUser.uid
      user.joined_at = newUser.metadata.creationTime
      dispatch(authSuccess(user))
      toast.success("You registered successfully !", {
        position: 'top-center'
      })
      navigate('/')
    } catch (error) {
      console.log(error);
      dispatch(authFailure(error.error))
      toast.error(error.message, {
        position: "bottom-center"
      })
    }
  }

  return (
<div className="row mx-auto mt-5 pt-2">
      <div className="col-11 col-sm-8 col-lg-4 col-md-6 mx-auto rounded border p-3 text-end">
        <div className="form-header d-flex justify-content-center align-items-center flex-column">
          <img src={images.logo} alt="Register" style={{width: '60px'}} className='mb-4' />
        </div>
      <div className="card text-center border-0">
        <div className="card-header bg-white border-0">
            <ul className="nav nav-tabs card-header-tabs  bg-white d-flex justify-content-center align-items-center ">
            <li className="nav-item">
                <Link to={'/login'} className="nav-link"
                >
                Login
                </Link>
            </li>
            <span style={{width: '1px', height: '30px'}} className='bg-primary'></span>
            <li className="nav-item rouned ms-2" style={{backgroundColor: '#67b9f454'}}>
                <Link to={'/register'} className="nav-link text-primary border-0" style={{backgroundColor: 'transparent'}}>
                Register
                </Link>
            </li>
            </ul>
        </div>
        <div className="card-body">
         <form>
         <Input label={'Firstname'} state={firstname} setState={setFirstname}
         icon={ <BadgeTwoTone color='primary' /> }
         />
         <Input label={"email"} state={email} setState={setEmail}
        icon= {<EmailTwoTone color='primary' />}
         />
        <Input
          label={"password"}
          type={"password"}
          state={password}
          setState={setPassword}
          icon={ <VpnKeyTwoTone color='primary' /> }
        />
        <Button
          variant='outlined'
          type='submit'
          onClick={(e) => registerHandler(e)}
          disabled={isLoading}
          >
            {isLoading ? <span>Processing... <i className="fa-solid fa-spinner fa-spin-pulse"></i></span> : 'Register'}
          </Button>
         </form>
        </div>
</div>
      </div>
    </div>

  )
}

export default Register