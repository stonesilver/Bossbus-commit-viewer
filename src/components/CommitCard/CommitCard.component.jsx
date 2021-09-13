import './commitCard.styles.scss';

const CommitCard = ({ avatar, username, commit, date }) => {
  const formattedDate = new Date(date).toLocaleDateString().replace(/\//g, '-');
  const time = new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return (
    <div className='commit-card'>
      <div className='user'>
        <div className='avatar'>
          <img src={avatar} alt='avatar' />
        </div>
        <div className='username'>{username}</div>
      </div>
      <div className='commit-message'>
        <p className='commit-message-text'>{commit}</p>
      </div>
      <div className='commit-date'>
        <p className='commit-date-date'>{`${time} ${formattedDate}`}</p>
      </div>
    </div>
  );
};

export default CommitCard;
