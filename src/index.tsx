import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Layout from './styles/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
