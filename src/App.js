import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.component';
import CommitPage from './pages/CommitPage/CommitPage.component';
import './App.scss';

function App() {
  const [searchInput, setSearchinput] = useState('');
  let history = useHistory()
  const handleChange = (event) => {
    setSearchinput(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    return searchInput ? history.push('./commits') : ''
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
