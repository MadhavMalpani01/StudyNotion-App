import React from 'react'
import Templates from '../components/Templates'
import LoginImg from '../assets/login.png'

 const Login = ({setIsLoggedIn}) => {
  return (

    <Templates
        title='Welcome Back'
        desc1='Build skills for today, tommorow, and beyond.'
        desc2='Education to future-proof your career.'
        image={LoginImg}
        formType='login'
        setIsLoggedIn={setIsLoggedIn}
    />

  )
}

export default Login