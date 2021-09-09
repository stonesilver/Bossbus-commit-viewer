import FormInput from '../FormInput/FormInput.component';
import SearchButton from '../SearchButton/SearchButton.component';
import './searchForm.styles.scss';

const SearchForm = ({ searchInput, handleChange, onSubmit }) => {
  return (
    <div className='search-form'>
      <form onSubmit={onSubmit} className='form-container'>
        <div className='input-field-container'>
          <FormInput searchInput={searchInput} handleChange={handleChange} />
        </div>
        <div className='btn-container'>
          <SearchButton />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
