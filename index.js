const express = require('express')
const app = express()
const path = require('path')

var htmlPath = path.join(__dirname, 'FinalProject')

app.use(express.static(htmlPath))

app.listen(3000, () => console.log('Server running on port 3000'))
