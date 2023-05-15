import _ from 'lodash';
import './style.css';
import WebMenu from './website-menu.png'
import printMe from './header.js'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = "Click Me";
    btn.onclick = printMe;
    
    element.appendChild(btn);
    
    const myIcon = new Image();
    myIcon.src = WebMenu;
    
    element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());