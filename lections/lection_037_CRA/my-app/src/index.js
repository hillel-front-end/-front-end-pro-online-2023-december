import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';


const root = createRoot(document.getElementById('root'));
// console.log(<App />)
// console.log(<h1>123</h1>)

root.render(<App />)

// <h1 className='title'> <span>123</span </h1>

// ---
// const h1 = React.createElement('h1', {className: 'title'},
//     React.createElement('span', {}, 123)
// );

// console.log(h1, 'h1');


// root.render(h1);

// JSX
// const h1_1 = <h1 className='title'> <span>123</span> </h1>
// console.log(h1_1, 'h1_1');


// root.render(h1_1)
