import React from 'react';  
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <>
      <div className='search-box'>
        <input type='text' placeholder='Search...'></input>
        <i className='bx-search'> <BsSearch /> </i>
      </div>
		</> 
	)
};

export default SearchBar;
