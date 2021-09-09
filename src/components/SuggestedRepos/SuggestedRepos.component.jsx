import SuggestedReposCard from './SuggestedReposCard/SuggestedReposCard.component';
import './suggestedRepos.styles.scss';

const SuggestedRepos = () => {
  return (
    <div className='suggested-repos'>
      <div className='suggested-repos-container'>
        <p className='suggested-repos-container-pick-one'>
          Or pick one of these suggested repos
        </p>
        <div className='suggested-repos-container-suggested-flex'>
          {[...Array(4).keys()].map((item, index) => (
            <SuggestedReposCard key={index} text='django/django' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedRepos;
