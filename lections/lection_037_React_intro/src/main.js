import { createRoot } from "react-dom/client";
import React from "react";


// setTimeout(() => {
createRoot(document.getElementById("react-app")).render(
    <h1><span>Hello</span> from React App</h1>
);
// }, 3000);


// const h1 = document.createElement('h1');
// h1.innerText = "Hello from React App";
// document.getElementById("react-app").append(h1);



/// Virtual DOM (native JS object) vs DOM

// React

// <h1>
// <span>Hello from React App</span>
// </h1>

/*
Step - 1 First Create VDOM
  {
    tagName: 'h1',
    children: [
        {
              tagName: 'span',
              children: ['Hello from React App']
        }
     ]
  }


  Step -2 New Virtual
    {
    tagName: 'h1',
    children: [
        {
              tagName: 'span',
              children: ['Hello Valera']
        }
     ]
  }

  Step - 3 Comparing Virt. Dom Step-1 and Step-2

  DIF:  Hello from React App - Hello Valera

  Step -4 React ->> push diff --> React-DOM -->> UPDATE DOM

 */

const a = {
  tagName: 'a',
  innerHTML: 'Hello'
}

a.tagName = 'div';
a.innerHTML = '22222Hello';

//React
