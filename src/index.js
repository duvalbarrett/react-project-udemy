// React is made up of components that are built together to make a user interface

// React components combine JS/HTML/CSS by creating re-usable & reactive components

// compoenent is just a js function

import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
