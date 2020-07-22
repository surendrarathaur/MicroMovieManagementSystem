import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Index';
import MovieList from './components/MovieList';

function App() {
  return (
    <Provider store={store}>
        <MovieList />
    </Provider>
  );
}

export default App;
