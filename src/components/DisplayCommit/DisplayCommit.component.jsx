import React, { useEffect, useState } from 'react';
import CommitCard from '../CommitCard/CommitCard.component';
import './displayCommit.styles.scss';

const DisplayCommits = ({ searchInput }) => {
  const [dataSet, setDateSet] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let [user, repo] = searchInput.split('/')
      // `https://api.github.com/search/commits?q=repo:${searchInput}+js`
      let response = await fetch(
        `https://api.github.com/repos/${user}/${repo}/commits`
        // ,
        // {
        //   headers: {
        //     Accept: 'application/vnd.github.cloak-preview',
        //     Accept: 'application/vnd.github.v3+json'
        //   },
        // }
      );
      response = await response.json();
      setDateSet(response);
    }

    fetchMyAPI();
  }, [searchInput]);

  console.log(dataSet);
  return (
    <div className='display-commits'>
      <div className='display-commits-container'>
        <div className='search-parameter'>
          <p className='search-parameter-text'>{searchInput}</p>
        </div>
        <div className='fetched-commits'>
          {dataSet.length ? (
            dataSet.filter((item, index) => index < 11).map((item, index) => (
              <CommitCard
                avatar={item?.author?.avatar_url}
                username={item?.author?.login}
                commit={item?.commit?.message}
                date={item?.commit?.author?.date}
                key={index}
              />
            ))
          ) : (
            <div className='loading'>loading......</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayCommits;
