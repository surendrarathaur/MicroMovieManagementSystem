import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Index';
import Navbar from './common/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import MyList from './components/MyList';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navbar />
      <Switch>
         <Route exact path="/" component={MovieList} />
         <Route path="/mylist" component={MyList} />
         <Route path="/*" component={() => 'NOT FOUND'} />
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
