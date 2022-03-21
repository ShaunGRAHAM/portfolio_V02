import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './i18n';


import './styles/index.scss';
import './styles/components/navigation.scss';
import './styles/components/carousel.scss';
import './styles/components/project.scss';
import './styles/components/footer.scss';
import './styles/components/projects.scss';
import './styles/components/slider.scss';
import './styles/pages/home.scss';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
