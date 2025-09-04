const express = require('express')
const rotaItem = require('./routes/item')

const app = express()
app.use(express.json())

app.use('/itens', rotaItem)

const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})