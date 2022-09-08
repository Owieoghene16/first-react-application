/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable import/no-cycle */
import React, { useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import Button from '../Components/buttons/Index.jsx';
import {
  Username, Email, Password, Reenterpassword,
} from '../Components/inputs/Register.jsx';
import useToggleVisibility from '../utils/usePasswordVisibility';
import useSignUp from '../utils/useSignUp';
import '../Assets/signup.scss';

const	Register = () => {
  // Password visiblity
  const Passwordfield = useRef();
  const Confirmpassword = useRef();
  const {
    passwordIcon,
    switchToggle,
  } = useToggleVisibility();

  // Creating users
  const {
    error,
    handleFormValue,
    registerUser,
  } = useSignUp();

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
      <div className='main-content'>
          <div className='second-content'>
            <div className='first-header'>
              <h2>Sign up</h2>
            </div>
            <div className='error'>
              <p> {error} </p>
            </div>
            <div className='second-header'>
              <div className='left'>
                <h6>Username</h6>
              </div>
              <div className='right'>
                <p>Already have an account?</p>
                <Link to='/signin'>
                  Log in
                </Link>
              </div>
            </div>
            <Username
              click={handleFormValue}
            />
            <div className='fourth-header'>
              <div className='left'>
                <h6>Email</h6>
              </div>
            </div>
            <Email
              click={handleFormValue}
            />
            <div className='fourth-header'>
              <div className='left'>
                <h6>Password</h6>
              </div>
              <div className='right'>
                {
                  passwordIcon
                    ? <p><i onClick={() => switchToggle(Passwordfield, Confirmpassword)
                      }><AiOutlineEyeInvisible /></i> Hide</p>
                    : <p><i onClick={() => switchToggle(Passwordfield, Confirmpassword)
                      }><FiEye /></i> Show</p>
                }
              </div>
            </div>
            <Password
              click={handleFormValue}
              toggle={Passwordfield}
            />
            <div className='fourth-header'>
              <div className='left'>
                <h6>Confirm password</h6>
              </div>
            </div>
            <Reenterpassword
              click={handleFormValue}
              toggle={Confirmpassword}
            />
            <div className='sixth-header'>
              <Button
                click={() => registerUser()}
                value={'Sign Up'}
              />
            </div>
          </div>
        </div>
      <Outlet />
    </>
  );
};

export default Register;
