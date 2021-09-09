import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.component';
import CommitPage from './pages/CommitPage/CommitPage.component';
import './App.scss';

function App() {
  const [searchInput, setSearchinput] = useState('');
  let history = useHistory();
  // const location = useLocation();
  const handleChange = (event) => {
    setSearchinput(event.target.value);
  };

  // const appendQuery = (key, value) => {
  //   let pathname = '/commits';
  //   // returns path: '/app/books'
  //   let searchParams = new URLSearchParams(location.search);
  //   // returns the existing query string: '?type=fiction&author=fahid'
  //   searchParams.set('query', searchInput);
  //   searchParams.set(key, value);
  //   history.push({
  //     pathname: pathname,
  //     search: searchParams.toString(),
  //   });
  // };

  const onSubmit = (event, key, value) => {
    event.preventDefault();
    // appendQuery(event, key, value)
    // return searchInput ? history.push('./commits') : ''
    return searchInput
      ? history.push({
          pathname: '/commits',
          search: `?query=${searchInput}`,
          state: { detail: '' },
        })
      : '';
  };
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Homepage
            searchInput={searchInput}
            handleChange={handleChange}
            onSubmit={onSubmit}
          />
        </Route>
        <Route exact path='/commits'>
          <CommitPage
            searchInput={searchInput}
            handleChange={handleChange}
            onSubmit={onSubmit}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
