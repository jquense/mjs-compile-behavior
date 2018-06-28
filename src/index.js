const { FOO, BAR } = require('./env')

document.body.innerHTML = `
  <ul>
    <li>FOO: ${FOO}</li>
    <li>BAR: ${BAR}</li>
  </ul>
`
