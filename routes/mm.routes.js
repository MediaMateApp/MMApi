const {Router} = require('express')
const { dummySelect } = require('../controllers/mm.controllers')

const router = new Router()

router.get('/', dummySelect)


module.exports = router