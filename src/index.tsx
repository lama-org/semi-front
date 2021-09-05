import React, { AriaAttributes, DOMAttributes } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    selected?: boolean;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
