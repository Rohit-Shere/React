import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
 return( <div>
    <h1>Custom App  | Day 3</h1>
  </div>)
}
/*const reactElement={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click me to visit google'
}*/

const anotherUSer='RANI'
const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target: '_balnk'},
  'Click me to visit google',
  anotherUSer

)
const anotherElement =(
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
 reactElement
  
)
