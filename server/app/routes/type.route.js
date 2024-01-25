module.exports = app => {

    const type = require('../controllers/type.controller.js')
    const router = require('express').Router()
    
    router.get('/', type.findAll)
    app.use('/api/type', router)
}
   