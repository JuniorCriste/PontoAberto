const root = document.getElementById('root')

const pessoas = [
  {name: 'Francisco', age: 28},
  {name: 'Monize', age: 23},
  {name: 'José', age: 44}
]

const tableBody = pessoas.map((pessoa) => {
  return `<tr>
    <td>${pessoa.name}</td>
    <td>${pessoa.age}</td>
  </tr>`
}).join('')

const table = `<table>
  <tr>
    <td>Nome</td>
    <td>Idade</td>
  </tr>
  ${tableBody}
</table>`;

root.insertAdjacentHTML('beforeend', table)