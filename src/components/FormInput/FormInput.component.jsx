import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './formInput.styles.scss';

const FormInput = ({ searchInput, handleChange }) => {
  return (
    <div className='input-field'>
      <FontAwesomeIcon className='icon' icon={faSearch} />
      <input
        type='text'
        className='text-input'
        placeholder='Eg. facebook/react'
        value={searchInput}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default FormInput;
