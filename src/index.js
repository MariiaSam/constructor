import {model} from './model'
import './css/main.css'

 const site = document.querySelector('#site');

//  console.log(templates[key])

model.forEach(block => {


site.insertAdjacentHTML("beforeend", block.toHTML())
});
 

