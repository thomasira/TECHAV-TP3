const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

//cors front-end link
const corsOption = {
 origin: 'http://localhost:8081'
}

//models
const db = require('./app/models')

//Sequelize
db.connex.sync()

app.use(cors(corsOption))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

//route
require('./app/routes/product.route')(app)
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`)
})