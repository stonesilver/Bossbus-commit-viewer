import React, { useState, useEffect } from 'react';
import SuggestedReposCard from './SuggestedReposCard/SuggestedReposCard.component';
import './suggestedRepos.styles.scss';

const SuggestedRepos = () => {
  const [repoData, setRepoData] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc'
    )
      .then((res) => res.json())
      .then((data) => setRepoData(data.items))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='suggested-repos'>
      <div className='suggested-repos-container'>
        <p className='suggested-repos-container-pick-one'>
          Or pick one of these suggested repos
        </p>
        <div className='suggested-repos-container-suggested-flex'>
          {repoData
            .filter((item, index) => index < 4)
            .map((item, index) => (
              <SuggestedReposCard key={index} text={item?.full_name} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedRepos;
