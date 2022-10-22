import React from 'react';
//import ReactDOM from 'react-dom'
import App from './App.jsx';
import { createRoot } from 'react-dom/client';

//using React v 18 to connect root id from HTML to our rendered App
import styles from './App.scss';

//ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);


//https://share.codesmith.io/ECRIjunior3