
const db = require('../models/index.js')
const Product = db.products
const Type = db.types

exports.findAll = (req, res) => {
    Product.findAll({
        include: Type,
    })
    .then(data => res.send(data))
    .catch(err => { 
        res.status(500).send({ message: err.message || 'Some error occurred' })
    })
}

exports.findOne = (req, res) => {
    Product.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || 'Some error occured' }))
}

exports.update = (req, res) => {
    const id = req.params.id;
    Product.update(req.body, { where: { id: id }})
    .then(num => {
        if(num == 1) res.send({ message: 'product updated' })
        else res.send({ message: 'product not found' })
    })
    .catch(err => res.status(500).send({ message: err.message || 'Some error occured' }))
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Product.destroy({ where: { id: id }})
    .then(num => {
        if(num == 1) res.send({ message: 'product updated' })
        else res.send({ message: 'product not found' })
    })
    .catch(err => res.status(500).send({ message: err.message || 'Some error occured' }))
},

exports.create = (req, res) => {
    if(!req.body.name) res.status(400).send({ message: 'the name is mandatory' })
    else {
        Product.create(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || 'Could not insert the data' }))
    }
}