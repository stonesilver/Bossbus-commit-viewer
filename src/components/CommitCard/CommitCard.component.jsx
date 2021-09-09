import './commitCard.styles.scss';

const CommitCard = ({ avatar, username, commit, date }) => {
  return (
    <div className='commit-card'>
      <div className='user'>
        <div className='avatar'>
          <img src={avatar} alt='avatar' />
        </div>
        <div className='username'>{username}</div>
      </div>
      <div className='commit-message'>
        <p className='commit-message-text'>{commit.slice(0, 85)}</p>
      </div>
      <div className='commit-date'>
        <p className='commit-date-date'>{`${new Date(
          date
        ).getFullYear()}-${new Date(date).getMonth()}-${new Date(
          date
        ).getDate()} ${new Date(date).getMinutes()}:${new Date(
          date
        ).getSeconds()}`}</p>
      </div>
    </div>
  );
};

export default CommitCard;
