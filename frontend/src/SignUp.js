import React, { useState } from 'react'
import EmployerSignUp from './Employer/EmployerSignUp'
import ApplicantSignUp from './JobApplicant/ApplicantSignUp'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom'


function SignUp() {

  const navigate = useNavigate()

  const [isVisible, setisVisible] = useState(true)
  const [isLoading, setisLoading] = useState(false)
  const [isSpinning, setisSpinning] = useState(false)

  const registerAsJobSeeker = () => {
      setisSpinning(!isSpinning)
      setTimeout(() => {
          setisVisible(!isVisible)
          setisSpinning(!isSpinning)
      }, 1500);
  }

  const registerAsEmployer = () => {
      setisSpinning(!isSpinning)
      setTimeout(() => {
          setisVisible(!isVisible)
          setisSpinning(!isSpinning)
      }, 1500);
  }

  const loginAsEmployer = () => {
      setisSpinning(!isSpinning)
      setTimeout(() => {
          setisSpinning(!isSpinning)
          navigate("/employerLogin")
      }, 1500);
  }

  const loginAsUser = () => {
      setisSpinning(!isSpinning)
      setTimeout(() => {
          setisSpinning(!isSpinning)
          navigate("/applicantLogin")
      }, 1500);
  }



  return (
      <>
          <div className='body d-flex align-items-center justify-content-center'>
              <div className='shadow rounded p-4 signup-box'>
                  <div className='site-logo-div mx-auto'>
                      <img src={require('./image/jnn.png')} alt="" className='w-100' />
                  </div>
                  {isVisible ?
                      <EmployerSignUp
                          registerAsJobSeeker={registerAsJobSeeker}
                          setisLoading={setisLoading}
                          isSpinning={isSpinning}
                          loginAsEmployer={loginAsEmployer}
                      />
                      : <ApplicantSignUp
                          registerAsEmployer={registerAsEmployer}
                          setisLoading={setisLoading}
                          isSpinning={isSpinning}
                          loginAsUser={loginAsUser}
                      />}
              </div>
              {
                  isLoading
                      ?
                      <div className='position-absolute loader-div w-100 d-flex align-items-center justify-content-center'>
                          <Loader />
                      </div>
                      :
                      null
              }
          </div>
      </>
  )
}

export default SignUp