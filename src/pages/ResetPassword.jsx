/* eslint-disable import/no-cycle */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { FiEye } from 'react-icons/fi';
import Button from '../Components/buttons/Index.jsx';
import { Password, Reenterpassword } from '../Components/inputs/Register.jsx';
import useResetPassword from '../utils/useResetPassword';
import useToggleVisibility from '../utils/usePasswordVisibility';
import '../Assets/signin.scss';

const ResetPassword = () => {
  const Passwordfield = useRef();
  const Confirmpassword = useRef();
  const {
    result,
    loading,
    formInput,
    resetPassword,
  } = useResetPassword();

  // Password visiblity
  const {
    passwordIcon,
    switchToggle,
  } = useToggleVisibility();

  return (
		<>
      <div className='navigate'>
        <nav>
          <div className='first-icon'>
            <Link to='/'>
		    	 	  <i><FaBook /></i>
            </Link>
          </div>
        </nav>
			</div>
      {
        loading
          ? <div className='main-container'>
            <div className='second-container'>
              <div className='first-head'>
                <h2>Reset Password</h2>
              </div>
              <div className='error'>
                <p> {result} </p>
              </div>
              <div className='second-head'>
                <div className='left'>
                  <h6>New Password</h6>
                </div>
                <div className='right'>
                  {
                    passwordIcon
                      ? <p> <i onClick={
                          () => switchToggle(Passwordfield, Confirmpassword)
                        }><AiOutlineEyeInvisible /></i> Hide</p>
                      : <p> <i onClick={
                          () => switchToggle(Passwordfield, Confirmpassword)
                        } ><FiEye /></i> Show</p>
                  }
                </div>
              </div>
              <Password
                click={formInput}
                toggle={Passwordfield}
              />
              <div className='fourth-head'>
                <div className='left'>
                  <h6>Confirm Password</h6>
                </div>
              </div>
              <Reenterpassword
                click={formInput}
                toggle={Confirmpassword}
              />
              <div className='sixth-head'>
                <Button
                  click={() => resetPassword()}
                  value={'Update'}
                />
              </div>
            </div>
          </div>
          : <div className='home-content'>
              <div className='container'>
                  <p>{result}</p>
              </div>
            </div>
      }
      <Outlet />
    </>
  );
};

export default ResetPassword;
