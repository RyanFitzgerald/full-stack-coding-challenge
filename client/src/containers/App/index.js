import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Containers
import SearchPage from '../SearchPage';
import AddPage from '../AddPage';

// Import components
import Header from '../../components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToastContainer
          position="top-right"
          type="success"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          pauseOnHover
        />
        <Header/>
        <Switch>
          <Route exact path="/" component={SearchPage}/>
          <Route exact path="/add" component={AddPage}/>
        </Switch>  
      </div>
    );
  }
}

export default App;
