import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchPage from '../SearchPage';
import AddPage from '../AddPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SearchPage}/>
          <Route exact path="/add" component={AddPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
