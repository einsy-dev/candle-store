import { createContext } from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import User from './store/User';
import Store from './store/Store';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new User(),
    store: new Store(),
  }}>
    <HashRouter>
      <App />
    </HashRouter>
  </Context.Provider>
);
