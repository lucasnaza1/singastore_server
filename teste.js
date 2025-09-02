const fs = require('fs')
const dadosAtuais = JSON.parse(fs.readFileSync('itens.json'))
const novoDado = { id: '4', nome: 'Capuz de Rabadon'}

fs.writeFileSync('itens.json', JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync('itens.json')))