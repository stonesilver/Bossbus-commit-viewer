import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CommitCard from '../CommitCard/CommitCard.component';
import './displayCommit.styles.scss';

const DisplayCommits = () => {
  const [dataSet, setDateSet] = useState([]);
  const useQuery = () => new URLSearchParams(useLocation().search);
  const searchQuery = useQuery().get('query');
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let [user, repo] = searchQuery.split('/');
        let response = await fetch(
          `https://api.github.com/repos/${user}/${repo.replace(
            /\s/g,
            '+'
          )}/commits`,
          {
            headers: {
              Authorization: `${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
            },
          }
        );
        response = await response.json();
        setDateSet(response);
      } catch (e) {
        console.log(e);
      }
    }

    fetchMyAPI();
  }, [searchQuery]);
  return (
    <div className='display-commits'>
      <div className='display-commits-container'>
        <div className='search-parameter'>
          <p className='search-parameter-text'>{searchQuery}</p>
        </div>
        <div className='fetched-commits'>
          {dataSet.message ? (
            <div className='error'>
              Repository Not found: Please Enter in This Format{' '}
              <span className='github-user'>{`{User}`}</span>/
              <span className='repo'>{`{repo}`}</span>
            </div>
          ) : dataSet.length ? (
            dataSet
              .filter((item, index) => index < 10)
              .map((item, index) => (
                <CommitCard
                  avatar={item?.author?.avatar_url}
                  username={item?.author?.login}
                  commit={item?.commit?.message}
                  date={item?.commit?.author?.date}
                  key={index}
                />
              ))
          ) : (
            <div className='loading'>loading......'</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayCommits;
