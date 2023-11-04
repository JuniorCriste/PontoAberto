const logo = document.getElementById('logo')
var URLlogo = "https://www.informaticode.com.br/assets/juniorcriste_informaticodeSquare.png"
var PAlogo= '<img src="' + {URLlogo} + '" width="50" height="50">';
const dadoslogo = ` ${PAlogo}`;

tabela.insertAdjacentHTML('beforeend', dadoslogo)





const titulo = document.getElementById('titulo')

var PAtitulo= "Livro de Ponto do Estado <br/>";
const dadostitulo = ` ${PAtitulo}`;

tabela.insertAdjacentHTML('beforeend', dadostitulo)





const descricao = document.getElementById('descricao')

var PAtitulo= "Livro de Ponto da EEEFM Garibaldo Martins Coelho Suzane <br/>";
const dadosdescricao = ` ${PAtitulo}`;

tabela.insertAdjacentHTML('beforeend', dadosdescricao)






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

tabela.insertAdjacentHTML('beforeend', table)

