import BrandName from '../BrandName/BrandName.component';
import FormInput from '../FormInput/FormInput.component';
import SearchButton from '../SearchButton/SearchButton.component';
import './navbarCommits.styles.scss';

const NavbarCommits = ({ searchInput, handleChange, onSubmit }) => {
  return (
    <div className='commit-navbar'>
      <div className='commit-navbar-container'>
        <BrandName />
        <form onSubmit={onSubmit} className='commit-form'>
          <div className='commits-input'>
            <FormInput handleChange={handleChange} searchInput={searchInput} />
          </div>
          <div className='commits-search-btn'>
            <SearchButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavbarCommits;
