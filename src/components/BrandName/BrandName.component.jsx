import { Link } from 'react-router-dom';
import './brandName.styles.scss';

const BrandName = () => {
  return (
    <div className='navbar-container-brandName'>
      <Link to='/' className='navbar-container-brandName-text'>CommitViewer</Link>
    </div>
  );
};

export default BrandName;
