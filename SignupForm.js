import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate()

    const[showPassword, setShowPassword] = useState(false)
    const[accountType,setAccountType] = useState('student')


    const[formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmPassword:''
        })

    function changeHandler (event) {
        
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
        

    }


    function submitHandler(event){
        event.preventDefault()
        if(formData.password != formData.confirmPassword){
            toast.error('Passowrd does not match')
        }

        setIsLoggedIn(true)
        toast.success('Account Created')
        navigate('/dashboard')
    
    }
    

  return (
    <div>

        <div className='flex bg-richblack-800 p-1 gap-z-1 my-6 rounded-full max-w-max'>
            <button
            className={`${accountType === "student" 
            ?
            "bg-richblack-900 text-richblack-5" 
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full tranistion-all duration-200`}

            onClick={() => setAccountType('student')}>
                Student
            </button>
            
            <button
            className={`${accountType === "instructor" 
            ?
            "bg-richblack-900 text-richblack-5" 
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full tranistion-all duration-200`}
            onClick={() => setAccountType('instructor')}>
                Instructor
            </button>
        </div>


        <form onSubmit={submitHandler}>

            <div className='flex gap-x-4 mt-4'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name
                    <sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='firstname'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstname}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name
                    <sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='lastname'
                        onChange={changeHandler}
                        placeholder='Enter last Name'
                        value={formData.lastname}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>

            </div>
            
            <div className='w-full mt-4'>
                <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address
                        <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='email'
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                </label>
            </div>

            <div className='flex gap-x-4 mt-4'>
                <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password
                        <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ('text') : ('password')}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span
                        className='absolute right-3 top-[38px] cursor-pointer' 
                        onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : 

                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                        </span>                       
                </label>

                <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password
                        <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ('text') : ('password')}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span
                        className='absolute right-3 top-[38px] cursor-pointer' 
                        onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : 

                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                        </span>                       
                </label>

            </div>
            
            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account
            </button>
        

        </form>

    </div>
  )
}

export default SignupForm