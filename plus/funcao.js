const root = document.getElementById('root')

const pessoas = [
    {numero: '1', nome: 'Junior Criste', licenca: 'LMS', cargo: 'Agente de Suporte Educacional', assinatura: '', observacao: ''},
    {numero: '2', nome: 'Osvaldo Pálido', licenca: 'LGE', cargo: 'Cuidador', assinatura: '', observacao: ''}

]

const tableBody = pessoas.map((pessoa) => {
  return `<tr>
    <td>${pessoa.numero}</td>
    <td>${pessoa.nome}</td>
    <td>${pessoa.licenca}</td>
    <td>${pessoa.cargo}</td>
    <td>${pessoa.assinatura}</td>
    <td>${pessoa.observacao}</td>
  </tr>`
}).join('')

const table = `<table>
  <tr>
  <td>*</td>
  <td>Nome</td>
  <td>Licença</td>
  <td>Cargo</td>
  <td>Assinatura</td>
  <td>Observação</td>
  </tr>
  ${tableBody}
</table>`;

root.insertAdjacentHTML('beforeend', table)