const model = [
  { type: 'title', value: 'Hello world from js' },

  { type: 'text', value: 'here we go some text' },

  { type: 'columns', value: ['111111111', '22222222', '333333333'] },
];

const site = document.querySelector('#site');

model.forEach(block => {
    let html = "";

  if (block.type === 'title') {
    html = `<div class="row">
    <div class="col-sm">
      <h1>${block.value}</h1>
    </div>
  </div>
    `
  } else if (block.type === 'text') {
    html = `<div class="row">
    <div class="col-sm">
     <p> ${block.value}</p>
    </div>
    </div>`
  } else if (block.type === 'columns'){
    const columnsHtml = block.value.map(column => `
    <div class="col">${column}</div>
  `).join('');

  html = `<div class="row">${columnsHtml}</div>`;
}

site.insertAdjacentHTML("beforeend", html )
});
