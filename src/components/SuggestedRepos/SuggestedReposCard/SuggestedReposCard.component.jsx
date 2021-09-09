import './suggestedReposCard.styles.scss';

const SuggestedReposCard = ({ text }) => {
  return (
    <div className='suggested-repos-card'>
      <p className='suggested-repos-card-text'>{text}</p>
    </div>
  );
};

export default SuggestedReposCard;
