import BrandName from '../BrandName/BrandName.component';
import './navbar.styles.scss';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <BrandName />
        <ul className='navbar-container-navlinks'>
          <li className='navbar-container-navlinks-link'>About</li>
          <li className='navbar-container-navlinks-link'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
