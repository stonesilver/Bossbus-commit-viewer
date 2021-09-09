// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FormInput from '../FormInput/FormInput.component';
import SearchButton from '../SearchButton/SearchButton.component';
import './searchForm.styles.scss';

const SearchForm = ({ searchInput, handleChange, onSubmit }) => {
  // const [searchInput, setSearchinput] = useState('');
  // const handleChange = (event) => {
  //   setSearchinput(event.target.value);
  // };
  // const onSubmit = (event) => {
  //   event.preventDefault()
  //   alert(searchInput)
  // }
  return (
    <div className='search-form'>
      <form onSubmit={onSubmit} className='form-container'>
        <div className='input-field-container'>
          <FormInput searchInput={searchInput} handleChange={handleChange} />
          {/* <div className='input-field'>
            <FontAwesomeIcon className='icon' icon={faSearch} />
            <input
              type='text'
              className='text-input'
              placeholder='Eg. facebook/react'
              value={searchInput}
              onChange={handleChange}
            />
          </div> */}
        </div>
        <div className='btn-container'>
          <SearchButton />
          {/* <button type='submit' className='btn'>
            See commits 🚀
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
