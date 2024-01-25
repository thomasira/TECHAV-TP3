const db = require('../models/index.js')
const Type = db.types

exports.findAll = (req, res) => {
    Type.findAll()
    .then(data => res.send(data))
    .catch(err => { 
        res.status(500).send({ message: err.message || 'Some error occurred' })
    })
}