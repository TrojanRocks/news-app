import './App.css';

import NewsContent from './components/NewsContent/NewsContent';
import {Provider} from 'react-redux';
import React from 'react';
import store from './store';

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <NewsContent/>
    </div>
    </Provider>
  );
}

export default App;
