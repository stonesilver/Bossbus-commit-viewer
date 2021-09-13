import { Link } from 'react-router-dom';
import './suggestedReposCard.styles.scss';

const SuggestedReposCard = ({ text }) => {
  return (
    <div className='suggested-repos-card'>
      <Link
        to={{
          pathname: '/commits',
          search: `?query=${text}`,
          state: { detail: '' },
        }}
        className={`${
          text === 'Loading...' ? 'disable-link' : ''
        } suggested-repos-card-text`}
      >
        {text}
      </Link>
    </div>
  );
};

export default SuggestedReposCard;
