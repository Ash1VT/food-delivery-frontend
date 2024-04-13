import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';

declare global {
  interface BigInt {
      toJSON(): string;
  }
}

BigInt.prototype.toJSON = function() {       
      return this.toString()
}

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
