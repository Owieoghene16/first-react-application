import React from 'react';
import '../../Assets/register.scss';
import { Outlet, Link } from 'react-router-dom';
import { FaBook, FaHome } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RiKeyFill } from 'react-icons/ri';

const	Header = () => {
  return (
		<>
      <div className='container'>
        <nav>
          <div className='first-icon'>
            <Link to='/'>
						<i><FaBook /></i>
           </Link>
          </div>
          <ul>
            <li>
              <Link to='/home'>
					    	<i><FaHome /></i>
                <span className='links_name'>Home</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
		     				<i><MdSpaceDashboard /></i>
                <span className='links_name'>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
			    			<i><AiOutlineUserAdd /></i>
                <span className='links_name'>Register</span>
              </Link>
            </li>
            <li>
              <Link to='/login' className='space'>
				    		<i><RiKeyFill /></i>
                <span className='links_name'>Login</span>
              </Link>
            </li>
          </ul>
        </nav> 
			</div>
		<Outlet />
    </>
	)
};

export default Header;
