import {model} from './model'
import {templates} from './tempates'
import './css/main.css'

 const site = document.querySelector('#site');


 const key = 'title'
 console.log(templates[key])

model.forEach(block => {
    let html = "";

//   if (block.type === 'title') {
//     html = title(block)
//   } else if (block.type === 'text') {
//     html = text(block)
//   } else if (block.type === 'columns'){
//   html = columns(block);
// }
// else if (block.type === 'image'){
//     html = image(block);
//   }

site.insertAdjacentHTML("beforeend", html )
});
 

