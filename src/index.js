import {model} from './model'
import {templates} from './tempates'
import './css/main.css'

 const site = document.querySelector('#site');


 const key = 'title'
//  console.log(templates[key])

model.forEach(block => {

const toHTML = templates[block.type]

if (toHTML) {
site.insertAdjacentHTML("beforeend",  toHTML(block))}


});
 

